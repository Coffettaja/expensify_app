import expensesReducer from '../../reducers/expensesReducer'
import { addExpense, removeExpense, editExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'


test('should set empty array as default', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

test('should add an expense to the array', () => {
  const expenseToAdd = { 
    id: expect.any(String),
    description: 'test expense',
    amount: 500,
    createdAt: 0,
    note: 'new note'
   }
  const action = addExpense(expenseToAdd)
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, expenseToAdd])
})

describe('editing expenses', () => {
  const updates = {
    description: 'edited',
    note: 'new note',
    amount: '50'
  }

  test('should edit the expense specified by id', () => {
    
    const action = editExpense(3, updates)
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([
      expenses[0],
      expenses[1],
      expenses[2],
      {
      ...state[3],
      ...updates
      }
    ])
  })

  test('should not edit anything if expense is not found', () => {
    const action = editExpense(74, updates)
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
  })
})

describe('removing expenses', () => {
  test('should remove expense by id', () => {
    const action = removeExpense(expenses[2].id)
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[1], expenses[3]])
  })

  test('should not remove any expenses if id was not found', () => {
    const action = removeExpense(7)
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
  })
})

