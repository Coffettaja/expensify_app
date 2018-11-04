import React from 'react'

const ExpenseListItem = ({ description, amount, createdAt }) => (
  <li> {description}
    <ul>
      <li>{amount}</li>
      <li>{createdAt}</li>
    </ul>
  </li>
)

export default ExpenseListItem