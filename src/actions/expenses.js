import uuid from 'uuid'

//  The action generators for expenses

// Add expense
// Takes an object as an argument. The object will be used to set the expense properties. Default values for the argument object and default properties also set. An expense gets an ID value from uuid library function. 
export const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  }
})

// Returns an object that states what expense should be removed by ID
export const removeExpense = (id) => ({
  type: 'REMOVE_EXPENSE',
  id
})

// Action that edits the expense with 'id' with the values provided by the 'updates' object
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})