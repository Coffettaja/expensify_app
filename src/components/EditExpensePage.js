import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { confirmAlert } from 'react-confirm-alert'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'
import RemoveConfirmationDialog from './RemoveConfirmationDialog'

export class EditExpensePage extends React.Component {
  onSubmit = (newExpenseValues) => {
    this.props.startEditExpense(this.props.expense.id, newExpenseValues)
    this.props.history.push('/')
  }

  onRemoveClick = () => {
    confirmAlert({
      customUI: ({ onClose }) => (
        <RemoveConfirmationDialog onClose={onClose} onConfirm={() => {
          this.props.startRemoveExpense(this.props.expense.id)
          this.props.history.push('/')
        }}></RemoveConfirmationDialog>
      )
    })
  }

  render() {
    if (!this.props.expense) {
      return (
        <div>
          <p>
            Looks like this expense does not exist :(
        </p>
          <Link to="/">Back to dashboard</Link>
        </div>
      )
    }
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            onSubmit={this.onSubmit}
            expense={this.props.expense}
          ></ExpenseForm>
          <button className="button button--warning" onClick={this.onRemoveClick}>Remove Expense</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(x => x.id === props.match.params.id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startEditExpense: (id, newExpenseValues) => dispatch(startEditExpense(id, newExpenseValues)),
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)