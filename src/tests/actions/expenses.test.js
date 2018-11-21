import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import{ startAddExpense, addExpense, removeExpense, editExpense, setExpenses } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

// create the configuration for mock store so all the testcases can use the same mock store
const createMockStore = configureMockStore([thunk]) // returns a function for creating a store, using the thunk middleware

// Setups the database to have test data from the expenses fixture
beforeEach((done) => {
  const expensesData = {}
  expenses.forEach(({ id, description, amount, note, createdAt }) => {
    expensesData[id] = { description, amount, note, createdAt }
  })
  database.ref('expenses').set(expensesData).then(() => done())
})

describe('addExpense', () => {
  test('should setup add expense action object with provided values', () => {
    const action = addExpense(expenses[0])
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: expenses[0]
    })
  })

  // 'done' required to tell jest that the test handles asyncronous stuff
  test('should add expense to database and store', (done) => {
    const store = createMockStore({})
    const expenseData = {
      description: 'Water bill',
      amount: 4000,
      note: '',
      createdAt: 5000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        // Check that the right action was dispatched to the redux store
        expect(actions[0]).toEqual({
          type: 'ADD_EXPENSE',
          expense: {
            id: expect.any(String),
            ...expenseData
          }
        })

        // checking that the expense actually exists in the db by trying to fetch it
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData)
      done()
    })
  })

  test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({})
    const expenseDefaults = {
      description: '',
      amount: 0,
      note: '',
      createdAt: 0
    }
    store.dispatch(startAddExpense()).then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseDefaults
        }
      })

      return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDefaults)
      done()
    })
  })
})

test('should setup set expense action object with data', () => {
  const action = setExpenses(expenses)
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
})

describe('removeExpense', () => {
  test('should setup remove expense action object', () => {
    const action = removeExpense('123abc')
    expect(action).toEqual({
      type: 'REMOVE_EXPENSE',
      id: '123abc'
    })
  })
})

describe('editExpense', () => {
  test('should setup edit expense action object', () => {
    const updates = { amount: 200, description: 'new description' }
    const action = editExpense('123abc', updates)
    expect(action).toEqual({
      type: 'EDIT_EXPENSE',
      id: '123abc',
      updates: updates
    })
  })
})
