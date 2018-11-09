import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm.jsx'
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
  const value = '22.50'
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