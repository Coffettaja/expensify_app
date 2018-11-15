import React from 'react'
import { connect } from 'react-redux'
import getExpensesTotalAmount from '../selectors/getExpensesTotalAmount'
import getVisibleExpenses from '../selectors/expenses'
import formatAmount from '../selectors/formatAmount'

export const ExpensesSummary = ({expensesCount, expensesTotal}) => {
  // if (expensesCount === 0) return null // whole page shifts when filtering...
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses'
  return (
    <div>
      {expensesCount === 0 ? <h3>No expenses</h3> : <h3>Viewing {expensesCount} {expenseWord}, totalling {formatAmount(expensesTotal)}</h3>}
    </div>
  )
}

const mapStateToProps = (state) => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: getExpensesTotalAmount(visibleExpenses)
  }
}

export default connect(mapStateToProps)(ExpensesSummary)