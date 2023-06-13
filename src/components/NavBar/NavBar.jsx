import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MyContext } from '../../GeneralContext/GeneralContext'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IconContext } from 'react-icons'

function NavBar () {
  const {
    productsAdd,
    setOptionSelected,
    isOpenBurguerMenu,
    setIsOpenBurguerMenu,
    setIsLoged
  } = useContext(MyContext)
  const activeStyle = 'underline underline-offset-4'
  const { isOpenCart, setIsOpenCart, isLoged } = useContext(MyContext)
  const navStyle = isOpenBurguerMenu
    ? 'flex flex-col w-full h-[100vh]  lg:h-auto lg:flex-row items-center text-lg lg:text-sm '
    : 'flex w-full justify-between items-center'
  const containerButtonStyle = isOpenBurguerMenu
    ? 'flex  lg:flex-row gap-10 px-4 lg:bg-gray-600 bg-white text-gray-600 lg:text-gray-200 lg:w-auto text-4xl lg:text-sm justify-between p-4 mb-10 lg:mb-0 items-center relative w-[100%] top-o'
    : 'flex w-[90%] justify-between items-center'
  const containerLinks = isOpenBurguerMenu
    ? 'lg:flex lg:flex-row lg:justify-between flex flex-col w-[100%] justify-center gap-5'
    : ''
  const containerUl = isOpenBurguerMenu
    ? 'lg:flex lg:flex-row gap-2 flex flex-col items-center text-start mb-10 lg:mb-0'
    : ''
  const countProductStyle = `rounded-full w-5 h-5 border bg-gray-200 absolute -bottom-1 left-5 flex justify-center items-center place-content-center text-xl font-bold text-gray-500 text-center pb-1 
    ${
      isOpenBurguerMenu && window.innerWidth < 1015
        ? 'left-10 bottom-1 absolute w-[30px] h-[30px]'
        : false
    }`
  const handleResize = () => {
    const windowWidth = window.innerWidth
    setIsOpenBurguerMenu(windowWidth >= 1015)
  }
  window.addEventListener('resize', handleResize)
  useEffect(() => {
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <nav className={navStyle}>
      <div className={containerButtonStyle}>
        <span
          onClick={() => {
            setIsOpenBurguerMenu(false)
            handleResize()
          }}
        >
          <NavLink to='/' onClick={() => setOptionSelected('asc')}>
            Shopi
          </NavLink>
        </span>
        <button
          className='lg:hidden'
          onClick={() => {
            setIsOpenBurguerMenu(!isOpenBurguerMenu)
          }}
        >
          <GiHamburgerMenu />
        </button>
      </div>
      <div className={containerLinks}>
        {isOpenBurguerMenu && (
          <>
            <ul className={containerUl}>
              <li>
                <NavLink
                  onClick={() => {
                    setOptionSelected('asc')
                    setIsOpenBurguerMenu(false)
                    handleResize()
                  }}
                  to={'/'}
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                >
                  All
                </NavLink>
              </li>
              <li id='mensClothing-hover'>
                <NavLink
                  to={"men'sClothing"}
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                  onClick={() => {
                    setIsOpenBurguerMenu(false)
                    handleResize()
                  }}
                >
                  {"Men's clothing"}
                </NavLink>
              </li>
              <li id='electronics-hover'>
                <NavLink
                  to={'./electronics'}
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                  onClick={() => {
                    setIsOpenBurguerMenu(false)
                    handleResize()
                  }}
                >
                  Electronics
                </NavLink>
              </li>
              <li id='jewelery-hover'>
                <NavLink
                  to={'./jewelery'}
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                  onClick={() => {
                    setIsOpenBurguerMenu(false)
                    handleResize()
                  }}
                >
                  Jewelery
                </NavLink>
              </li>
              <li id='womensClothing-hover'>
                <NavLink
                  to={"./women's-clothing"}
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                  onClick={() => {
                    setIsOpenBurguerMenu(false)
                    handleResize()
                  }}
                >
                  {"Women's clothing"}
                </NavLink>
              </li>
            </ul>
            <ul className={containerUl}>
              <li
                onClick={() => {
                  setIsOpenBurguerMenu(false)
                  handleResize()
                }}
              >
                {isLoged !== true
                  ? (
                  <NavLink to={'./sign-in'}>Sign in</NavLink>
                    )
                  : (
                  <span>
                    {JSON.parse(sessionStorage.getItem('actualUser')).email}
                  </span>
                    )}
              </li>

              {!isLoged
                ? (
                    ''
                  )
                : (
                <>
                  <li>
                    <NavLink
                      to={'./my-orders'}
                      className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      onClick={() => {
                        setIsOpenBurguerMenu(false)
                        handleResize()
                      }}
                    >
                      My Orders
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={'./my-account'}
                      className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      onClick={() => {
                        setIsOpenBurguerMenu(false)
                        handleResize()
                      }}
                    >
                      My Account{' '}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={'./log-out'}
                      className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      onClick={() => {
                        setIsOpenBurguerMenu(false)
                        handleResize()
                        setIsLoged(false)
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
        )}
      </div>
      <button
        onClick={() => {
          setIsOpenCart(!isOpenCart)
          setIsOpenBurguerMenu(false)
          handleResize()
        }}
        className={`relative flex items-center justify-center ml-4 mr-2  ${
          isOpenBurguerMenu
            ? 'w-[50px] h-[70px] md:w-[30px] md:h-[30px] text-2xl'
            : 'w-[30px] h-[30px] '
        }`}
      >
        <IconContext.Provider
          value={{
            className: 'shared-class',
            size:
              isOpenBurguerMenu && window.innerWidth < 1015
                ? 50
                : window.innerWidth >= 1015
                  ? 30
                  : 30
          }}
        >
          <AiOutlineShoppingCart />
        </IconContext.Provider>
        <span className={countProductStyle}>{productsAdd.length}</span>
      </button>
    </nav>
  )
}

export { NavBar }
