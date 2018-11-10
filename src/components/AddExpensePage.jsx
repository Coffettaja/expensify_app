import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm.jsx'
import { addExpense } from '../actions/expenses.jsx'

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    // props.dispatch(addExpense(expense))
    this.props.onSubmit(expense)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <h1>Add expense</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
        ></ExpenseForm>
      </div>
    )
  }
}

// using this so testing the component is easier. Above a spy function could be used to mock props.dispatch(), but addExpense() would be more troublesome.
// so mapDispatchToProps allows calling the dispatch function from another function, which then can be called in the actual component through props.
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (expense) => dispatch(addExpense(expense))
  }
}

export default connect(undefined, mapDispatchToProps)(AddExpensePage)