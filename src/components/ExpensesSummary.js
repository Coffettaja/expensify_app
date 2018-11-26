import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import getExpensesTotalAmount from '../selectors/getExpensesTotalAmount'
import getVisibleExpenses from '../selectors/expenses'
import formatAmount from '../selectors/formatAmount'

export const ExpensesSummary = ({expensesCount, expensesTotal}) => {
  // if (expensesCount === 0) return null // whole page shifts when filtering...
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses'
  return (
    <div className="page-header">
      <div className="content-container">
        {expensesCount === 0 ? <h1 className="page-header__title">No expenses</h1> : <h1 className="page-header__title">Viewing <span>{expensesCount}</span> {expenseWord}, totalling <span>{formatAmount(expensesTotal)}</span></h1>}
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
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