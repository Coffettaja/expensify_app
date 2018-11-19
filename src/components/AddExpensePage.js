import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startAddExpense } from '../actions/expenses'

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense)
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

// using this so testing the component is easier. Above a spy function could be used to mock props.dispatch(), but startAddExpense() would be more troublesome.
// so mapDispatchToProps allows calling the dispatch function from another function, which then can be called in the actual component through props.
const mapDispatchToProps = (dispatch) => {
  return {
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
  }
}

export default connect(undefined, mapDispatchToProps)(AddExpensePage)