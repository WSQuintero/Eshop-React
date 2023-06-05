import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MyContext } from '../../GeneralContext/GeneralContext'

function NavBar () {
  const { addedProducts } = useContext(MyContext)
  const activeStyle = 'underline underline-offset-4'
  const countProductStyle =
    'rounded-full w-5 h-5 border bg-gray-200 absolute -bottom-1 left-5 flex justify-center items-center place-content-center text-xs font-semibold text-gray-500'
  const { isOpenCart, setIsOpenCart } = useContext(MyContext)

  return (
    <nav className='flex justify-between items-center h-20 top-0 w-full fixed bg-white z-10 p-6'>
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
        <button
          className='w-7 h-7 relative'
          onClick={() => {
            setIsOpenCart(!isOpenCart)
          }}
        >
          <AiOutlineShoppingCart />
          <span className={countProductStyle}>{addedProducts}</span>
        </button>
      </ul>
    </nav>
  )
}

export { NavBar }
