import React from 'react'
import NavLink from './NavLink'
import { IndexLink, Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1> Issues </h1>
          <ul role='nav'>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/repos">Repos</NavLink></li>
            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          </ul>
          {this.props.children || <Home/>}
      </div>
    )
  }
})
