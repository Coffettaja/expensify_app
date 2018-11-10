import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage.jsx'
import expenses from '../fixtures/expenses'

let editExpense, removeExpense, history, expenseToEdit, wrapper

beforeEach(() => {
  editExpense = jest.fn()
  removeExpense = jest.fn()
  history = { push: jest.fn() }
  expenseToEdit = expenses[0]
  wrapper = shallow(<EditExpensePage editExpense={editExpense} removeExpense={removeExpense} history={history} expense={expenseToEdit}></EditExpensePage>)
})

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle editExpense on submit', () => {
  // the values don't actually matter in this case ...
  const newExpenseValues = { description: 'test description', amount: '100000' }
  wrapper.find('ExpenseForm').prop('onSubmit')(newExpenseValues)
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(editExpense).toHaveBeenLastCalledWith(expenseToEdit.id, newExpenseValues)
})

test('should handle removeExpense on button click', () => {
  wrapper.find('button').at(0).simulate('click') //prop('onClick')()
  expect(removeExpense).toHaveBeenLastCalledWith(expenseToEdit.id)
})