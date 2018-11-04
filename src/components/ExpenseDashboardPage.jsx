import React from 'react'
import ExpenseList from './ExpenseList.jsx'
import ExpenseListFilters from './ExpenseListFilters.jsx'

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters></ExpenseListFilters>
    <ExpenseList></ExpenseList>
  </div>
)

export default ExpenseDashboardPage