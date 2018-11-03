import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter.jsx'
import configureStore from './store/configureStore.jsx'
import { addExpense } from './actions/expenses.jsx'
import { setTextFilter } from './actions/filters.jsx'
import getVisibleExpenses from './selectors/expenses.jsx'
import './styles/styles.sass'
import 'normalize.css/normalize.css'

const store = configureStore()

store.dispatch(addExpense({description: 'Water bill', amount: 4000}))
store.dispatch(addExpense({description: 'Gas bill', amount: 2000}))
console.log(store.getState())
store.dispatch(setTextFilter('water'))

const visibleExpenses = getVisibleExpenses(store.getState().expenses, store.getState().filters)

console.log(visibleExpenses)

ReactDOM.render(<AppRouter></AppRouter>, document.getElementById('app'))
