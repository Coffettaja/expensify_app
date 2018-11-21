import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { startSetExpenses } from './actions/expenses'
import { setTextFilter, sortByAmount, sortByDate } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import './styles/styles.sass'
import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css'
import './firebase/firebase'

const store = configureStore()

// Provider provides the redux state to all the components inside.
const jsx = (
  <Provider store={store}>
    <AppRouter></AppRouter>
  </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'))
})

