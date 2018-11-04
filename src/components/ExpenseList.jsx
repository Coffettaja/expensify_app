import React from 'react'
import { connect } from 'react-redux' // connects the component to the redux store

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.length}
    {props.filters.text}
  </div>
)

// Maps the component state to props.
// This automatically reruns when the redux state changes.
const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters,
  }
}

// The argument is a function that is used to provide what info we want the component to be able to access. The function takes the state of the store as an argument, and returns an object with key - value pairs. The object then gets passed to the connected component as props.
export default connect(mapStateToProps)(ExpenseList)
