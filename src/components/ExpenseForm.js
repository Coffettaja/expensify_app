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
      descriptionError: false,
      amountError: false
    }
  }
  
  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => ({ 
      description,
      descriptionError: !description
     }))
  }

  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(() => ({ note }))
  }

  onAmountChange = (e) => {
    const amount = e.target.value
    
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
    // Basically if the input value is too big.
    if (amountFloat > 1e+12) {
      console.log(amountFloat)
      amountError = true
    }
    
    this.setState(() => ({
      descriptionError,
      amountError
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
