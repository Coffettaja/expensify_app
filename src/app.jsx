import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter.jsx'
import configureStore from './store/configureStore.jsx'
import { addExpense } from './actions/expenses.jsx'
import { setTextFilter, sortByAmount, sortByDate } from './actions/filters.jsx'
import getVisibleExpenses from './selectors/expenses.jsx'
import './styles/styles.sass'
import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()

store.dispatch(addExpense({description: 'Wata bill', amount: 40, createdAt: 1}))
store.dispatch(addExpense({description: 'Gas bill', amount: 20, createdAt: 22}))
store.dispatch(addExpense({description: 'Rent', amount: 200, createdAt: 14}))
store.dispatch(addExpense({description: 'LaterRent', amount: 200, createdAt: 15}))

// Provider provides the redux state to all the components inside.
const jsx = (
  <Provider store={store}>
    <AppRouter></AppRouter>
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
