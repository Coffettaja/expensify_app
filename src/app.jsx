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

const store = configureStore()

store.dispatch(addExpense({description: 'Wata bill', amount: 40, createdAt: 1}))
store.dispatch(addExpense({description: 'Gas bill', amount: 20, createdAt: 2}))
console.log(store.getState())
store.dispatch(setTextFilter('wa'))
store.dispatch(sortByAmount())
store.dispatch(sortByDate())

setTimeout(() => {
  store.dispatch(setTextFilter('gas'))
}, 3000)

const visibleExpenses = getVisibleExpenses(store.getState().expenses, store.getState().filters)

console.log(visibleExpenses)

// Provider provides the redux state to all the components inside.
const jsx = (
  <Provider store={store}>
    <AppRouter></AppRouter>
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
