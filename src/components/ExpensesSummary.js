import React from 'react'
import { connect } from 'react-redux'
import expenses_total from '../selectors/expenses_total'
import getVisibleExpenses from '../selectors/expenses'
import formatAmount from '../selectors/formatAmount'

export const ExpensesSummary = ({expensesCount, expensesTotal}) => {
  if (expensesCount === 0) return null
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses'
  return (
    <div>
      <p>Viewing {expensesCount} {expenseWord}, totalling {formatAmount(expensesTotal)}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: expenses_total(visibleExpenses)
  }
}

export default connect(mapStateToProps)(ExpensesSummary)