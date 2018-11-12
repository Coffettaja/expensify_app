import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { addExpense } from '../actions/expenses'

export class AddExpensePage extends React.Component {
  /**
  * Dispatches an addExpense action to the store, and then returns to homepage.
  * @param {Object} expense to be added if succesful
  */
  onSubmit = (expense) => {
    this.props.addExpense(expense)
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
    addExpense: (expense) => dispatch(addExpense(expense))
  }
}

export default connect(undefined, mapDispatchToProps)(AddExpensePage)