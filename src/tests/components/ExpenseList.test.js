import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseList } from '../../components/ExpenseList.jsx'
import expenses from '../fixtures/expenses'

test('should render ExpenseList with empty message when no expenses', () => {  
  const wrapper = shallow(<ExpenseList expenses={[]}></ExpenseList>)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseList with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses}></ExpenseList>)
  expect(wrapper).toMatchSnapshot()
})