import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { confirmAlert } from 'react-confirm-alert'
import moment from 'moment'
import formatAmount from '../selectors/formatAmount'
import { startRemoveExpense } from '../actions/expenses'
import RemoveConfirmationDialog from './RemoveConfirmationDialog'


export class ExpenseListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timeOutID: undefined,
      noteClass: 'list-item__note list-item__note--hidden'
    }
  }

  onRemoveClick = () => {
    confirmAlert({
      customUI: ({ onClose }) => (
        <RemoveConfirmationDialog onClose={onClose} onConfirm={() => {
          this.props.startRemoveExpense(this.props.id)
        }}></RemoveConfirmationDialog>
      )
    })
  }

  onMouseEnter = () => {
    const displayNote = this.props.note.length > 0  
    if (!displayNote) return
    // Have to set this beforehand so that the opacity transition works.
    this.setState(() => ({
      noteClass: 'list-item__note list-item__note--invisible'
    }))
    const timeOutID = setTimeout(() => {
      this.setState(() => ({
        noteClass: 'list-item__note'
      }))
    }, 500)

    this.setState(() => ({timeOutID}))
  }

  onMouseLeave = () => {
    clearTimeout(this.state.timeOutID)
    this.setState(() => ({
      noteClass: 'list-item__note list-item__note--hidden'
    }))
  }

  componentWillUnmount =() => {
    clearTimeout(this.state.timeOutID)
  }

  render() {
    return (
      <div className="list-item">
      <Link onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className="list-item__link" to={`/edit/${this.props.id}`}>
        <div>
          <h3 className="list-item__title">{this.props.description}</h3>
          <span className="list-item__sub-title">{moment(this.props.createdAt).format('MMMM Do, YYYY')}</span>
        </div>
        <h3 className="list-item__data">{formatAmount(this.props.amount)}</h3>
      </Link>
        <button onClick={this.onRemoveClick} className="remove-button">X</button>
        <div className={this.state.noteClass}>
          <p>{this.props.note}</p>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
})

export default connect(undefined, mapDispatchToProps)(ExpenseListItem)