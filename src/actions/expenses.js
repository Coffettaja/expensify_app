import uuid from 'uuid'
import database from '../firebase/firebase'

//  The action generators for expenses

// Add expense
// Takes an object as an argument. The object will be used to set the expense properties. Default values for the argument object and default properties also set. An expense gets an ID value from uuid library function. 
// export const addExpense = (
//   {
//     description = '',
//     note = '',
//     amount = 0,
//     createdAt = 0
//   } = {}
// ) => ({
//   type: 'ADD_EXPENSE',
//   expense: {
//     id: uuid(),
//     description,
//     note,
//     amount,
//     createdAt,
//   }
// })

export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
})

// starts the process of adding an expense to the store
export const startAddExpense = (expenseData = {}) => {
  // returning functions is OK because of redux-thunk middleware
  // it also gives them the dispatch function as a parameter
  return (dispatch) => {
    // this has basically the same result as default values in addExpense but maybe easier to read
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData

    // First push the data to the database, and if that works, dispatch the action to the redux store
    const expense = { description, note, amount, createdAt }
    // returning a promise to make promise chaining possible (mainly for testing purposes)
    return database.ref('expenses').push(expense)
      .then((ref) => {
        dispatch(addExpense({
          id: ref.key,
          ...expense
        }))
      })
  }
}

/**
 * Generates an action object that states what expense should be removed by ID
 * @return {Object} an action object for removing expenses from the state
 * @param {string} id
 */
export const removeExpense = (id) => ({
  type: 'REMOVE_EXPENSE',
  id
})

/**
 * Generates an action object with id of expense to be edited and updates.
 *
 * @param {string} id of the expense to be edited
 * @param {Object} updates - states the new property values
 * @param {string} [updates.description] - new description
 * @returns {Object} with the type: 'EDIT_EXPENSE'
 */
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})