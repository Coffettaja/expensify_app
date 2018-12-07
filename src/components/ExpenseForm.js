import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import { history } from '../routers/AppRouter'

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() :  '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: '', // Not used anywhere right now. Could be used for displaying error messages.
      descriptionError: false,
      amountError: false
    }
  }
  
  onDescriptionChange = (e) => {
    let description = e.target.value
    if (description.length > 50) {
      description = description.slice(0, 50)
    }
    this.setState(() => ({ 
      description,
      descriptionError: !description
     }))
  }

  onNoteChange = (e) => {
    let note = e.target.value
    if (note.length > 300) 
      {
        // For example when copypasting it still works up to a point
        note = note.slice(0, 300)
      }
    this.setState(() => ({ note }))
  }

  onAmountChange = (e) => {
    let amount = e.target.value
    if (amount.length > 12) {
        amount = amount.slice(0, 12)
    }
    
    if (!amount || amount.match(/^\d{1,}(\,\d{0,2})?$/)) {
      this.setState(() => ({
        amount,
        amountError: !amount
       }))
    }
  }

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }))
    }
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  }
  
  onCancel = () => {
    history.push('/dashboard')
  }

  onSubmit = (e) => {
    e.preventDefault()
    let descriptionError = !this.state.description
    let amountError = !this.state.amount
    // Multiply by 100 to make the amount to be cents instead of dollars / euros
    const amountFloat = parseFloat(this.state.amount.replace(',', '.'), 10) * 100
    
    this.setState(() => ({
      descriptionError,
      amountError,
      error
    }))
  
    if (!descriptionError && !amountError) {
      this.props.onSubmit({
        description: this.state.description,
        amount: amountFloat, 
        createdAt: this.state.createdAt.valueOf(), // Get the timestamp of the moment object
        note: this.state.note,
      })
    }
  }

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit} >
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
          className={`text-input ${this.state.descriptionError ? "text-input--error" : ''}`}
        />
        <input
          type="text"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
          className={`text-input ${this.state.amountError ? "text-input--error" : ''}`}
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1} // How many months are displayed at a time
          isOutsideRange={() => false} // Makes all the dates available, past and future
          displayFormat={() => "DD/MM/YYYY"}
        ></SingleDatePicker>
        <textarea
          placeholder="Add a note for your expense (optional)."
          value={this.state.note}
          onChange={this.onNoteChange}
          className="textarea"
        />
        <div className="form__buttons-div">
          <button type="submit" className="button">Save Expense</button>
          <button type="button" className="button button--secondary" onClick={this.onCancel}>Cancel</button>
        </div>
      </form>
    )
  }
}
