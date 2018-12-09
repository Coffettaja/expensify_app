import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export const LoginPage = ({startLogin}) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expense Manager</h1>
      <p>Managing Expenses Made Easier</p>
      <button className="button" onClick={startLogin}>Login with Google</button>
    </div>
  </div>
)

// is there a reason to dispatch this? doesn't change redux store lol
const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)