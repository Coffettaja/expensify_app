import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'
import { SSL_OP_CRYPTOPRO_TLSEXT_BUG } from 'constants';

export class EditExpensePage extends React.Component {
  onSubmit = (newExpenseValues) => {
    this.props.editExpense(this.props.expense.id, newExpenseValues)
    this.props.history.push('/')
  }

  onRemoveClick = () => {
    this.props.removeExpense(this.props.expense.id)
    this.props.history.push('/')
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
        <ExpenseForm
          onSubmit={this.onSubmit}
          expense={this.props.expense}
        ></ExpenseForm>
        <button onClick={this.onRemoveClick}>Remove!</button>
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
    editExpense: (id, newExpenseValues) => dispatch(editExpense(id, newExpenseValues)),
    removeExpense: (id) => dispatch(removeExpense(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)