import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MyContext } from '../../GeneralContext/GeneralContext'

function Links ({ isResize }) {
  const {
    state: { isOpenBurguerMenu, isLoged },
    dispatch
  } = useContext(MyContext)

  const activeStyle = 'underline underline-offset-4'
  const containerUl =
    isResize || isOpenBurguerMenu
      ? 'lg:flex lg:flex-row gap-2 flex flex-col items-center text-start mb-10 lg:mb-0 w-full'
      : ''

  return (
    <>
      <ul className={containerUl}>
        <li>
          <NavLink
            onClick={() => {
              dispatch({ type: 'ASCEND' })
              dispatch({ type: 'OPEN_BURGUER_MENU', value: false })
              // handleResize()
            }}
            to={'/'}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li id='mensClothing-hover'>
          <NavLink
            to={"/men'sClothing"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => {
              dispatch({ type: 'OPEN_BURGUER_MENU', value: false })
              // handleResize()
            }}
          >
            {"Men's clothing"}
          </NavLink>
        </li>
        <li id='electronics-hover'>
          <NavLink
            to={'/electronics'}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => {
              dispatch({ type: 'OPEN_BURGUER_MENU', value: false })
              // handleResize()
            }}
          >
            Electronics
          </NavLink>
        </li>
        <li id='jewelery-hover'>
          <NavLink
            to={'/jewelery'}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => {
              dispatch({ type: 'OPEN_BURGUER_MENU', value: false })
              // handleResize()
            }}
          >
            Jewelery
          </NavLink>
        </li>
        <li id='womensClothing-hover'>
          <NavLink
            to={"/women's-clothing"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => {
              dispatch({ type: 'OPEN_BURGUER_MENU', value: false })
              // handleResize()
            }}
          >
            {"Women's clothing"}
          </NavLink>
        </li>
      </ul>
      <ul className={containerUl}>
        <li
          onClick={() => {
            dispatch({ type: 'OPEN_BURGUER_MENU', value: false })
            // handleResize()
          }}
        >
          {isLoged !== true
            ? (
            <NavLink to={'/sign-in'}>Sign in</NavLink>
              )
            : (
            <span>
              {JSON.parse(sessionStorage.getItem('actualUser')).email}
            </span>
              )}
        </li>

        {!isLoged ? (
          ''
        ) : (
          <>
            <li>
              <NavLink
                to={'/my-orders'}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
                onClick={() => {
                  dispatch({ type: 'OPEN_BURGUER_MENU', value: false })
                  // handleResize()
                }}
              >
                My Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/my-account'}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
                onClick={() => {
                  dispatch({ type: 'OPEN_BURGUER_MENU', value: false })
                  // handleResize()
                }}
              >
                My Account{' '}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/log-out'}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
                onClick={() => {
                  dispatch({ type: 'OPEN_BURGUER_MENU', value: false })
                  // handleResize()
                  dispatch({ type: 'LOGIN', value: false })
                  sessionStorage.removeItem('actualUser')
                }}
              >
                {' '}
                Log out
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </>
  )
}

export { Links }
