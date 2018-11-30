import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'
import formatAmount from '../selectors/formatAmount'
import { startRemoveExpense } from '../actions/expenses'


export class ExpenseListItem extends React.Component {
  onRemoveClick = () => {
    this.props.startRemoveExpense(this.props.id)
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
        <button onClick={this.onRemoveClick} className="button button--remove">X</button>
      </div>
    )
  }
}
//  = ({ description, amount, createdAt, id, removeExpense }) => (
//     <Link className="list-item" to={`/edit/${id}`}>
//       <div>
//         <h3 className="list-item__title">{description}</h3>
//         <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
//       </div>
//       <h3 className="list-item__data">{formatAmount(amount)}</h3>
//       <button onClick={onRemoveClick} className="button button--remove">X</button>
//     </Link>      
// )

const mapDispatchToProps = (dispatch) => ({
  startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
})

export default connect(undefined, mapDispatchToProps)(ExpenseListItem)