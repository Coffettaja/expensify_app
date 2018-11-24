import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import authReducer from '../reducers/authReducer'
import expensesReducer from '../reducers/expensesReducer'
import filtersReducer from '../reducers/filtersReducer'

// This is needed for dev tools to work
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Store creation
// combineReducers takes an object that contains the key - value pairs. Key is the root state name, and the value is the reducer that is supposed to manage that.

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  return store
}
