import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export const LoginPage = ({startLogin}) => (
  <div>
    <button onClick={startLogin}>Log in</button>
  </div>
)

// is there a reason to dispatch this? doesn't change redux store lol
const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)