import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

export const Header = ({startLogout}) => (
  <header className="header">
    <div className="content-container header__content">
      <Link className="header__title" to="/dashboard"  >
        <h1>Expensify</h1>
      </Link>
      <button className="button button--no-bg" onClick={startLogout} >Logout</button>
    </div>
  </header>
)

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

// why does this need to be connected?
export default connect(undefined, mapDispatchToProps)(Header)