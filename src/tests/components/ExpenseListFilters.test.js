import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters.jsx'
import { defaultFilters, altFilters } from '../fixtures/filters'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
  setTextFilter = jest.fn()
  sortByDate = jest.fn()
  sortByAmount = jest.fn()
  setStartDate = jest.fn()
  setEndDate = jest.fn

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

test('', () => {

})