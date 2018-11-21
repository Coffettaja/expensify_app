import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm></ExpenseForm>)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseForm with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]}></ExpenseForm>)
  expect(wrapper).toMatchSnapshot()
})

test('should render an error for invalid form sumbission', () => {
  const wrapper = shallow(<ExpenseForm></ExpenseForm>)
  // making one snapshot before changing the rendered output to make sure that the render is correct before and after the event happening
  expect(wrapper).toMatchSnapshot()
  // simulate can be used to simulate events on nodes
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  })
  // Checks that there is indeed some text in the error property of the state object of ExpenseForm
  expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot()
})

test('should set description on input change', () => {
  const wrapper = shallow(<ExpenseForm></ExpenseForm>)
  const value = 'new description'
  wrapper.find('input[placeholder="Description"]').at(0).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('description')).toBe(value)
})

test('should set note on input change', () => {
  const wrapper = shallow(<ExpenseForm></ExpenseForm>)
  const value = 'new note'
  wrapper.find('textarea').at(0).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('note')).toBe(value)
})

test('should set amount if valid input', () => {
  const wrapper = shallow(<ExpenseForm></ExpenseForm>)
  const value = '22,50'
  wrapper.find('input[placeholder="Amount"]').at(0).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe(value)
})

// prolly should test this one more since the check relies on nonsense regex -.-
test('should not set amount if invalid input', () => {
  const wrapper = shallow(<ExpenseForm></ExpenseForm>)
  const value = "22..50" 
  wrapper.find('input[placeholder="Amount"]').at(0).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe('')
})

test('should call onSubmit prop for valid form submission', () => {
  // Spies can be used to mock functions by passing them as props to Components, and then it they can be used to check if they were called, and with what arguments
  const onSubmitSpy = jest.fn()
  const expense = expenses[0]
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}></ExpenseForm>)
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  })
  expect(wrapper.state('error')).toBe('')
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expense.description,
    amount: expense.amount,
    note: expense.note,
    createdAt: expense.createdAt
  })
})

test('should set new date on date change', () => {
  const now = moment()
  const wrapper = shallow(<ExpenseForm></ExpenseForm>)
  // can also find React Components
  // it is possible to access the properties of an element with either .prop(KEY), or get them all with props()
  // To test onDateChange, it has to be retrieved from the component, and it requires a moment instance as a parameter
  wrapper.find('SingleDatePicker').prop('onDateChange')(now)
  expect(wrapper.state('createdAt')).toEqual(now)
})

test('should set calendarFocused on focus change', () => {
  const wrapper = shallow(<ExpenseForm></ExpenseForm>)
  const onFocusChange = wrapper.find('SingleDatePicker').prop('onFocusChange')
  onFocusChange({ focused: true })
  expect(wrapper.state('calendarFocused')).toBe(true)
  onFocusChange({ focused: false })
  expect(wrapper.state('calendarFocused')).toBe(false)
})