import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters.jsx'

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate))
    this.props.dispatch(setEndDate(endDate))
  }

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({
      calendarFocused
    }))
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value)) // Connected components have dispatch in props by default.
          }} />
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            e.target.value === 'date' ? this.props.dispatch(sortByDate()) : this.props.dispatch(sortByAmount())
          }} >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          focusedInput={this.state.calendarFocused}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
          displayFormat={() => "DD/MM/YYYY"}
        ></DateRangePicker>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters)