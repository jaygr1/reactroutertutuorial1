import React from 'react'
import NavLink from './Navlink'
import { browserHistory } from 'react-router'

export default React.createClass({

  handleSubmit(event) {
    event.preventDefault()
    const UserName = event.target.elements[0].value
    const repo = event.target.elements[1].value
    const path = '/repos/${userName}/${repo}'
    browserHistory.push(path)
  },

  render() {
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">React</NavLink></li>

          <li>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="userName"/> / {' '}
              <input type="text" placeholder="repo"/>{' '}
            </form>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
