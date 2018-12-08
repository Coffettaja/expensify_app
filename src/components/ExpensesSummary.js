import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import getExpensesTotalAmount from '../selectors/getExpensesTotalAmount'
import getVisibleExpenses from '../selectors/expenses'
import formatAmount from '../selectors/formatAmount'

export const ExpensesSummary = ({visibleExpensesCount, totalExpensesCount, expensesTotal}) => {
  const viewingAllExpenses = visibleExpensesCount === totalExpensesCount
  const noExpenses = totalExpensesCount === 0
  const noVisibleExpenses = visibleExpensesCount === 0
  return (
    <div className="page-header">
      <div className="content-container">
        {
        noExpenses ? 
          <h1 className="page-header__title">No expenses.</h1> : 
        viewingAllExpenses ? 
          <h1 className="page-header__title">Viewing all <span>{visibleExpensesCount}</span> expenses, totalling <span className="rwd-line">{formatAmount(expensesTotal)}</span></h1> :
        noVisibleExpenses ? 
          <h1 className="page-header__title">Viewing no expenses ouf of {totalExpensesCount} expenses.</h1> :
          <h1 className="page-header__title">Viewing <span>{visibleExpensesCount}</span> ouf of {totalExpensesCount} expenses, totalling <span className="rwd-line">{formatAmount(expensesTotal)}</span></h1>
        }
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
    visibleExpensesCount: visibleExpenses.length,
    totalExpensesCount: state.expenses.length,
    expensesTotal: getExpensesTotalAmount(visibleExpenses)
  }
}

export default connect(mapStateToProps)(ExpensesSummary)