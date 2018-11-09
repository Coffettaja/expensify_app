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