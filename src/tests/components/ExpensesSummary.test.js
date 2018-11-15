import React from 'react'
import { ExpensesSummary } from '../../components/ExpensesSummary'
import expenses from '../fixtures/expenses'
import formatAmount from '../../selectors/formatAmount'
import { shallow } from 'enzyme'

test('should render correctly when no expenses', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={0}></ExpensesSummary>)
  expect(wrapper).toMatchSnapshot()
})

test('should render correctly when there are expenses', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={expenses.length} expensesTotal={4523}></ExpensesSummary>)
  expect(wrapper).toMatchSnapshot()
})