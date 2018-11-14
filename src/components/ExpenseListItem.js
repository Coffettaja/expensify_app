import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

numeral.register('locale', 'fr', {
  delimiters: {
    thousands: ' ',
    decimal: ','
  },
  currency: {
    symbol: '€'
  }
})
numeral.locale('fr')

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
  <div>
    <li><Link to={`/edit/${id}`}>{description}</Link>
      <ul>
        <li>Amount: {numeral(amount / 100).format('0,0.00$')}</li>
        <li>Created at: {moment(createdAt).format('MMMM Do, YYYY')}</li>
      </ul>
    </li> 
  </div>
)

export default ExpenseListItem