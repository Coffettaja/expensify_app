import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import Header from '../components/Header'
import HelpPage from '../components/HelpPage'
import LoginPage from '../components/LoginPage'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
  // BrowserRouter expects just a single element inside (in this case div)
  // When Route path is matched, the component is rendered
  // 'exact' states that the route path has to be exactly that
  <BrowserRouter>
    <div>
      <Header></Header> 
      <Switch>
        <Route path="/" component={LoginPage} exact={true}></Route>
        <Route path="/dashboard" component={ExpenseDashboardPage}></Route>
        <Route path="/create" component={AddExpensePage} ></Route>
        <Route path="/edit/:id" component={EditExpensePage} ></Route>
        <Route path="/help" component={HelpPage}></Route>
        <Route component={NotFoundPage}></Route>
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter

