import moment from 'moment'
import filtersReducer from '../../reducers/filtersReducer'

// Maybe smarter to import the actual action generators and use them instead of hard coding all the actions again...

const defaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
}

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT'})
  expect(state).toEqual(defaultState)
})

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
  expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
  const initialState = {...defaultState, sortBy: 'amount'}
  const state = filtersReducer(initialState, { type: 'SORT_BY_DATE' })
  expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
  const text = 'textfilter'
  const action = { type: 'SET_TEXT_FILTER', text }
  const state = filtersReducer(undefined, action)
  expect(state.text).toBe(text)
})

test('should set startDate filter', () => {
  const date = moment()
  const action = { type: 'SET_START_DATE', date }
  const state = filtersReducer(undefined, action)
  expect(state.startDate).toBe(date)
})

test ('should set endDate filter', () => {
  const date = moment()
  const action = { type: 'SET_END_DATE', date }
  const state = filtersReducer(undefined, action)
  expect(state.endDate).toBe(date)
})