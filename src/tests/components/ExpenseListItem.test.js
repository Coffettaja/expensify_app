import React from 'react'
import { shallow } from 'enzyme'
import ExpenseListItem from '../../components/ExpenseListItem.jsx'
import expenses from '../fixtures/expenses'

test('should render ExpenseListItem correctly', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[2]}></ExpenseListItem>)
  expect(wrapper).toMatchSnapshot()
})