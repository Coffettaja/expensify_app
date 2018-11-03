import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter.jsx'
import configureStore from './store/configureStore.jsx'
import { addExpense } from './actions/expenses.jsx'
import { setTextFilter, sortByAmount, sortByDate } from './actions/filters.jsx'
import getVisibleExpenses from './selectors/expenses.jsx'
import './styles/styles.sass'
import 'normalize.css/normalize.css'

const store = configureStore()

store.dispatch(addExpense({description: 'Wata bill', amount: 40, createdAt: 1}))
store.dispatch(addExpense({description: 'Gas bill', amount: 20, createdAt: 2}))
console.log(store.getState())
// store.dispatch(setTextFilter('wa'))
store.dispatch(sortByAmount())
store.dispatch(sortByDate())

const visibleExpenses = getVisibleExpenses(store.getState().expenses, store.getState().filters)

console.log(visibleExpenses)

ReactDOM.render(<AppRouter></AppRouter>, document.getElementById('app'))
