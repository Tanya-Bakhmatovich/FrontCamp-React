import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar () {
  const actions = [{
    name: 'Register',
    param: 'users/register'
  }, {
    name: 'Log in',
    param: 'users/login',
  }, {
    name: 'Blogs',
    param: 'blogs',
  }]

  return (
    <ul>
      {actions.map(({ name, param }) => (
        <li key={param}>
          <NavLink activeStyle={{fontWeight: 'bold'}} to={`/${param}`}>
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
