import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import formatAmount from '../selectors/formatAmount'
// import numeral from 'numeral'

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
  <div>
    <li><Link to={`/edit/${id}`}>{description}</Link>
      <ul>
        <li>Amount: {formatAmount(amount)}</li>
        <li>Created at: {moment(createdAt).format('MMMM Do, YYYY')}</li>
      </ul>
    </li> 
  </div>
)

export default ExpenseListItem