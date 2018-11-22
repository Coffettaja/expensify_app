import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let startEditExpense, startRemoveExpense, history, expenseToEdit, wrapper

beforeEach(() => {
  startEditExpense = jest.fn()
  startRemoveExpense = jest.fn()
  history = { push: jest.fn() }
  expenseToEdit = expenses[0]
  wrapper = shallow(<EditExpensePage startEditExpense={startEditExpense} startRemoveExpense={startRemoveExpense} history={history} expense={expenseToEdit}></EditExpensePage>)
})

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle editExpense on submit', () => {
  // the values don't actually matter in this case ...
  const newExpenseValues = { description: 'test description', amount: '100000' }
  wrapper.find('ExpenseForm').prop('onSubmit')(newExpenseValues)
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(startEditExpense).toHaveBeenLastCalledWith(expenseToEdit.id, newExpenseValues)
})

test('should handle startRemoveExpense on button click', () => {
  wrapper.find('button').at(0).simulate('click') //prop('onClick')()
  expect(startRemoveExpense).toHaveBeenLastCalledWith(expenseToEdit.id)
})