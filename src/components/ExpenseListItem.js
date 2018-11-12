import React from 'react'
import { Link } from 'react-router-dom'

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
  <div>
    <li><Link to={`/edit/${id}`}>{description}</Link>
      <ul>
        <li>Amount: {amount}</li>
        <li>Created at: {createdAt}</li>
      </ul>
    </li> 
  </div>
)

export default ExpenseListItem