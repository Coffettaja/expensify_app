import moment from 'moment'
import getVisibleExpenses from '../../selectors/expenses'
import expenses from '../fixtures/expenses'

const defaultFilters = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

describe('filtering', () => {
  test('should filter by text value', () => {
    const filters = {
      ...defaultFilters,
      text: 're'
    }
    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[1]])
  })

  test('should filter by startDate', () => {
    const filters = {
      ...defaultFilters,
      startDate: moment(0)
    }
    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[3], expenses[2], expenses[0]])
  })

  test('should filter by endDate', () => {
    const filters = {
      ...defaultFilters,
      endDate: moment(0).add(3, 'days')
    }
    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[0], expenses[1]])
  })

  test('should filter by both startDate and endDate and also text', () => {
    const filters = {
      ...defaultFilters,
      text: 't',
      startDate: moment(0).subtract(1, 'days'),
      endDate: moment(0).add(5, 'days')
    }
    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[2]])
  })
})

describe('sorting', () => {
  test('should sort by amount', () => {
    const filters = {
      ...defaultFilters,
      sortBy: 'amount'
    }
    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[1], expenses[0], expenses[3]])
  })

  test('should sort by date', () => {
    const result = getVisibleExpenses(expenses, defaultFilters)
    expect(result).toEqual([expenses[3], expenses[2], expenses[0], expenses[1]])
  })
})









