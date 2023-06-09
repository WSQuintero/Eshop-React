import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MyContext } from '../../GeneralContext/GeneralContext'

function NavBar () {
  const { productsAdd } = useContext(MyContext)
  const activeStyle = 'underline underline-offset-4'
  const countProductStyle =
    'rounded-full w-5 h-5 border bg-gray-200 absolute -bottom-1 left-5 flex justify-center items-center place-content-center text-xs font-semibold text-gray-500'
  const { isOpenCart, setIsOpenCart } = useContext(MyContext)
  const borderLi = 'border-l border-gray-500 text-center px-2'

  return (
    <nav className='flex justify-between items-center h-[100%] top-0 w-[100%]  '>
      <ul className='flex items-center'>
        <li className={`font-bold ${borderLi}`}>
          <NavLink to='/'>Shopi</NavLink>
        </li>
        <li className={borderLi + ' hover:bg-gray-300'}>
          <NavLink
            to={'/'}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li className={`${borderLi} hover:bg-mens hover:text-white`}>
          <NavLink
            to={"/men'sClothing"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {"Men's clothing"}
          </NavLink>
        </li>
        <li className={`${borderLi} hover:bg-electronics hover:text-white`}>
          <NavLink
            to={'/electronics'}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li className={`${borderLi} hover:bg-jewelry hover:text-white`}>
          <NavLink
            to={'/jewelery'}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Jewelery
          </NavLink>
        </li>
        <li className={`${borderLi} hover:bg-women hover:text-white`}>
          <NavLink
            to={"/women's-clothing"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {"Women's clothing"}
          </NavLink>
        </li>
      </ul>
      <ul className='flex gap-3 items-center '>
        <li className='text-black/60 border-l border-gray-500 text-center px-2'>
          santiago@gmail.com
        </li>
        <li className={borderLi}>
          <NavLink
            to={'/my-orders'}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li className={borderLi}>
          <NavLink
            to={'/my-account'}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account{' '}
          </NavLink>
        </li>
        <li className={borderLi}>
          <NavLink
            to={'sign-out'}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {' '}
            Sign out
          </NavLink>
        </li>
        <button
          className='w-7 h-7 relative border-l border-gray-500 text-center px-1'
          onClick={() => {
            setIsOpenCart(!isOpenCart)
          }}
        >
          <AiOutlineShoppingCart />
          <span className={countProductStyle}>{productsAdd.length}</span>
        </button>
      </ul>
    </nav>
  )
}

export { NavBar }
