import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() :  '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: '',
    }
  }
  
  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => ({ description }))
  }

  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(() => ({ note }))
  }

  onAmountChange = (e) => {
    const amount = e.target.value

    if (!amount || amount.match(/^\d{1,}(\,\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
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
  
  onSubmit = (e) => {
    e.preventDefault()

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: 'Please provide description and amount.'
      }))
    } else {
      this.setState(() => ({
        error: ''
      }))
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount.replace(',', '.'), 10) * 100, // Multiply by 100 to make the amount to be cents instead of dollars / euros
        createdAt: this.state.createdAt.valueOf(), // Get the timestamp of the moment object
        note: this.state.note,
      })
    }
  }

  render() {
    // moment.locale('en')
    return (
      <div>
        { this.state.error && <p>{this.state.error}</p> }
        <form onSubmit={this.onSubmit} >
          <input 
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input 
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1} // How many months are displayed at a time
            isOutsideRange={() => false } // Makes all the dates available, past and future
            displayFormat={() => "DD/MM/YYYY"}
          ></SingleDatePicker>
          <textarea 
            placeholder="Add a note for your expense (optional)."
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}