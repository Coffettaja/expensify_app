import{ addExpense, removeExpense, editExpense} from '../../actions/expenses.jsx'

describe('addExpense', () => {
  test('should setup add expense action object with provided values', () => {
    const expenseData = {
      description: 'Rent',
      amount: 15000,
      createdAt: 1000,
      note: 'note for the rent'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        ...expenseData,
        id: expect.any(String),
      }
    })
  })

  test('should setup the add expense action object with default values', () => {
    const expenseData = {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }

    const action = addExpense()
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        ...expenseData,
        id: expect.any(String)
      }
    })
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