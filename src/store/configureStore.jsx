import { createStore, combineReducers } from 'redux'
import expensesReducer from '../reducers/expensesReducer.jsx'
import filtersReducer from '../reducers/filtersReducer.jsx'

// Store creation
// combineReducers takes an object that contains the key - value pairs. Key is the root state name, and the value is the reducer that is supposed to manage that.

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    })
  )

  return store
}
