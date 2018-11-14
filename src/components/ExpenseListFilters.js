import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters'

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate)
    this.props.setEndDate(endDate)
  }

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({
      calendarFocused
    }))
  }

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value)
  }

  onSortChange = (e) => {
    e.target.value === 'date' ? this.props.sortByDate() : this.props.sortByAmount()
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange} />
        <select
          value={this.props.filters.sortBy}
          onChange={this.onSortChange} >
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


const mapStateToProps = (state) => ({
    filters: state.filters
  })

// shorthand way
const mapDispatchToProps = {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
  // setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  // setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  // setTextFilter: (textFilter) => dispatch(setTextFilter(textFilter)),
  // sortByDate: () => dispatch(sortByDate()),
  // sortByAmount: () => dispatch(sortByAmount())
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)