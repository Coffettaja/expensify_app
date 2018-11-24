import React from 'react'
import { Route, Router, Switch, Link, NavLink } from 'react-router-dom'
import AddExpensePage from '../components/AddExpensePage'
import createHistory from 'history/createBrowserHistory'
import EditExpensePage from '../components/EditExpensePage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import HelpPage from '../components/HelpPage'
import LoginPage from '../components/LoginPage'
import NotFoundPage from '../components/NotFoundPage'
import PrivateRoute from './PrivateRoute'

export const history = createHistory()

const AppRouter = () => (
  // BrowserRouter expects just a single element inside (in this case div)
  // When Route path is matched, the component is rendered
  // 'exact' states that the route path has to be exactly that
  // BrowserRouter replaced with just plain Router so custom history value can be passed in
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact={true}></Route>
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}></PrivateRoute>
        <PrivateRoute path="/create" component={AddExpensePage} ></PrivateRoute>
        <PrivateRoute path="/edit/:id" component={EditExpensePage} ></PrivateRoute>
        <Route path="/help" component={HelpPage}></Route>
        <Route component={NotFoundPage}></Route>
      </Switch>
    </div>
  </Router>
)

export default AppRouter

