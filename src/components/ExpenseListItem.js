import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { confirmAlert } from 'react-confirm-alert'
import moment from 'moment'
import formatAmount from '../selectors/formatAmount'
import { startRemoveExpense } from '../actions/expenses'
import RemoveConfirmationDialog from './RemoveConfirmationDialog'


export class ExpenseListItem extends React.Component {
  onRemoveClick = () => {
    confirmAlert({
      customUI: ({ onClose }) => (
        <RemoveConfirmationDialog onClose={onClose} onConfirm={() => {
          this.props.startRemoveExpense(this.props.id)
        }}></RemoveConfirmationDialog>
      )
    })
  }

  render() {
    return (
      <div className="list-item">
      <Link className="list-item__link" to={`/edit/${this.props.id}`}>
        <div>
          <h3 className="list-item__title">{this.props.description}</h3>
          <span className="list-item__sub-title">{moment(this.props.createdAt).format('MMMM Do, YYYY')}</span>
        </div>
        <h3 className="list-item__data">{formatAmount(this.props.amount)}</h3>
      </Link>
        <button onClick={this.onRemoveClick} className="remove-button">X</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
})

export default connect(undefined, mapDispatchToProps)(ExpenseListItem)