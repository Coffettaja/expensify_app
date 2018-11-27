import React from 'react'
import { connect } from 'react-redux' // connects the component to the redux store
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

// exported for testing purposes
export const ExpenseList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    {
      props.expenses.length === 0 ? (
        <div className="list-item list-item--message">
          <p>No expenses</p>
        </div>
      ) : (
        <div>
          {props.expenses.map((expense) => (
            <ExpenseListItem
              key={expense.id}
              {...expense}
            ></ExpenseListItem>
          ))}
        </div>
      )
    }
    
  </div>
)

// Maps the component state to props.
// This automatically reruns when the redux state changes.
const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

// The argument is a function that is used to provide what info we want the component to be able to access. The function takes the state of the store as an argument, and returns an object with key - value pairs. The object then gets passed to the connected component as props.
export default connect(mapStateToProps)(ExpenseList)
