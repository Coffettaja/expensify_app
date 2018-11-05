import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm.jsx'
import { addExpense } from '../actions/expenses.jsx'

const AddExpensePage = (props) => (
  <div>
    <h1>Add expense</h1>
    <ExpenseForm
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense))
        props.history.push('/')
      }}
    ></ExpenseForm>
  </div>
)

export default connect()(AddExpensePage)