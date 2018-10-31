import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './styles/styles.sass'
import 'normalize.css/normalize.css'

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component
  </div>
)

const AddExpensePage = () => (
  <div>
    This is from my addexpense component
  </div>
)

const EditExpensePage = () => (
  <div>
    This is from my editexpense component
  </div>
)

const HelpPage = () => (
  <div>
    This is from my helppage component
  </div>
)

const NotFoundPage = () => (
  <div>
    404!!!
  </div>
)

// BrowserRouter expects just a single element inside (in this case div)
// When Route path is matched, the component is rendered
// 'exact' states that the route path has to be exactly that
const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true}></Route>
      <Route path="/create" component={AddExpensePage} ></Route>
      <Route path="/edit" component={EditExpensePage} ></Route>
      <Route path="/help" component={HelpPage} ></Route>
      <Route component={NotFoundPage}></Route>
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'))
