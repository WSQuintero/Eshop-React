import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar () {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={'/'}>All</NavLink>
        </li>
        <li>
          <NavLink to={'/clothes'}>Clothes</NavLink>
        </li>
        <li>
          <NavLink to={'/electronics'}>Electronics</NavLink>
        </li>
        <li>
          <NavLink to={'/furniture'}>Furniture</NavLink>
        </li>
        <li>
          <NavLink to={'/toys'}>Toys</NavLink>
        </li>
        <li>
          <NavLink to={'/others'}>Others</NavLink>
        </li>
      </ul>
      <ul>
        <li>santiago@gmail.com</li>
        <li>
          <NavLink to={'/my-orders'}>My Orders</NavLink>
        </li>
        <li>
          <NavLink to={'/my-account'}>My Account </NavLink>
        </li>
        <li>
          <NavLink to={'sign-out'}>Sign out</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export { NavBar }
