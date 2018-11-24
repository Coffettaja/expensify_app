import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Header from '../components/Header'

// Component that redirects the user back the main page if they are not logged in
export const PrivateRoute = ({
  isAuthenticated,
  component: Component, // Just renames the component (because React components should be capitalized)
  ...rest  
}) => (
  <Route {...rest} component={(props) => (
    isAuthenticated ? (
      <div>
        <Header></Header>
        <Component {...props} ></Component>
      </div>
    ) : (
      <Redirect to="/" ></Redirect>
    )
  )} ></Route>
)

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)
