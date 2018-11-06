import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm.jsx'
import { editExpense, removeExpense } from '../actions/expenses.jsx'
import { SSL_OP_CRYPTOPRO_TLSEXT_BUG } from 'constants';

const EditExpensePage = (props) => (
  <div>
    <ExpenseForm 
      onSubmit={(expense) => {
        props.dispatch(editExpense(props.expense.id, expense))
        // console.log(expense)
        props.history.push('/')
      }} 
      expense={props.expense}
    ></ExpenseForm>
    <button onClick={(e) => {
      props.dispatch(removeExpense(props.expense.id))
      props.history.push('/')
    }}>Remove!</button>
  </div>
)

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(x => x.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(EditExpensePage)