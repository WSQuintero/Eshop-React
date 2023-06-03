import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar () {
  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className='flex justify-between top-0 w-full'>
      <ul className='flex gap-3 items-center'>
        <li className='font-bold '>
          <NavLink to='/'>Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to={'/'}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/men'sClothing"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {"Men's clothing"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/electronics'}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/jewelery'}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Jewelery
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/women's-clothing"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {"Women's clothing"}
          </NavLink>
        </li>
      </ul>
      <ul className='flex gap-3 items-center '>
        <li className='text-black/60'>santiago@gmail.com</li>
        <li>
          <NavLink
            to={'/my-orders'}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/my-account'}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account{' '}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'sign-out'}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {' '}
            Sign out
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export { NavBar }
