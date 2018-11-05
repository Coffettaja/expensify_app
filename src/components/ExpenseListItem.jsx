import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses.jsx'

const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => (
  <div>
    <li> {description}
      <ul>
        <li>Amount: {amount}</li>
        <li>Created at: {createdAt}</li>
      </ul>
    </li> 
    <button onClick={(e) => {
      dispatch(removeExpense(id)) 
    }}>Remove!</button>
  </div>
)

// Connecting without param still gives the component access to dispatch() in props.
export default connect()(ExpenseListItem)