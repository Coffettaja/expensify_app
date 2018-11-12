import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { defaultFilters, altFilters } from '../fixtures/filters'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
  setTextFilter = jest.fn()
  sortByDate = jest.fn()
  sortByAmount = jest.fn()
  setStartDate = jest.fn()
  setEndDate = jest.fn()

  wrapper = shallow(<ExpenseListFilters
      filters={defaultFilters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    ></ExpenseListFilters>)
})

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({ filters: altFilters })
  expect(wrapper).toMatchSnapshot()
})

test('should handle text filter change', () => {
  const textFilter = "textfilter"
  const e = {
    target: {
      value: textFilter
    }
  }
  wrapper.find('input').at(0).prop('onChange')(e)
  expect(setTextFilter).toHaveBeenLastCalledWith(textFilter)
})

test('should sort by selected option', () => {
  wrapper.find('select').simulate('change', { target: { value: 'amount' }})
  expect(sortByDate).not.toHaveBeenCalled()
  expect(sortByAmount).toHaveBeenCalled()
  wrapper.find('select').simulate('change', { target: { value: 'date' } })
  expect(sortByDate).toHaveBeenCalled()
})


test('should handle date changes', () => {
  wrapper.find('DateRangePicker').prop('onDatesChange')(altFilters)
  expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate)
  expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate)
})

test('should handle calendar focus changes', () => {
  wrapper.find('DateRangePicker').prop('onFocusChange')('endDate')
  expect(wrapper.state().calendarFocused).toBe('endDate')
  wrapper.find('DateRangePicker').prop('onFocusChange')('startDate')
  expect(wrapper.state().calendarFocused).toBe('startDate')
})