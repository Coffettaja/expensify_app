import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import AddExpensePage from '../components/AddExpensePage.jsx'
import EditExpensePage from '../components/EditExpensePage.jsx'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.jsx'
import Header from '../components/Header.jsx'
import HelpPage from '../components/HelpPage.jsx'
import NotFoundPage from '../components/NotFoundPage.jsx'

const AppRouter = () => (
  // BrowserRouter expects just a single element inside (in this case div)
  // When Route path is matched, the component is rendered
  // 'exact' states that the route path has to be exactly that
  <BrowserRouter>
    <div>
      <Header></Header> 
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}></Route>
        <Route path="/create" component={AddExpensePage} ></Route>
        <Route path="/edit" component={EditExpensePage} ></Route>
        <Route path="/help" component={HelpPage}></Route>
        <Route component={NotFoundPage}></Route>
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter

