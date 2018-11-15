import React from 'react'
import { connect } from 'react-redux'
import expenses_total from '../selectors/expenses_total'
import formatAmount from '../selectors/formatAmount'

export const ExpensesSummary = (props) => {
  if (props.expensesCount === 0) return null
  return (
    <div>
      <p>Viewing {props.expensesCount} expenses, totalling {formatAmount(props.expensesTotal)}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    expensesCount: state.expenses.length,
    expensesTotal: expenses_total(state.expenses)
  }
}

export default connect(mapStateToProps)(ExpensesSummary)