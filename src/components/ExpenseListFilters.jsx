import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter } from '../actions/filters.jsx'

const ExpenseListFilters = (props) => (
  <div>
    <input type="text" value={props.filters.text} onChange={(e) => {
      props.dispatch(setTextFilter(e.target.value)) // Connected components have dispatch in props by default.
    }}/>
  </div>
)

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters)