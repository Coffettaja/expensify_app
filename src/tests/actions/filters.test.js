import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters'
import moment from 'moment'


describe('setTextFilter', () => {
  test('should generate set text filter action with default values', () => {
    const action = setTextFilter()
    expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text: ''
    })
  })

  test('should generate set text filter action object with provided values', () => {
    const text = 'test text'
    const action = setTextFilter(text)
    expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text: text
    })
  })
})

describe('sortByAmount', () => {
  test('should generate sort by amount action object', () => {
    const action = sortByAmount()
    expect(action).toEqual({
      type: 'SORT_BY_AMOUNT'
    })
  })
})

describe('sortByDate', () => {
  test('should generate sort by date action object', () => {
    const action = sortByDate()
    expect(action).toEqual({
      type: 'SORT_BY_DATE'
    })
  })
})

describe('setStartDate', () => {
  test('should generate set start date action object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
      type: 'SET_START_DATE',
      date: moment(0)
    })
  })
})

describe('setEndDate', () => {
  test('should generate set end date action object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
      type: 'SET_END_DATE',
      date: moment(0)
    })
  })
})
