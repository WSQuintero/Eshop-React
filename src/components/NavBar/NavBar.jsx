import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MyContext } from '../../GeneralContext/GeneralContext'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IconContext } from 'react-icons'
import './NavBar.css'

function NavBar () {
  const {
    state: { isOpenCart, isLoged, productsAdd },
    dispatch,
    isOpenBurguerMenu,
    setIsOpenBurguerMenu
  } = useContext(MyContext)
  const [isResize, setIsResize] = useState()

  const countProductStyle = ` countProductStyle
    ${
      isOpenBurguerMenu && window.innerWidth < 1015
        ? 'left-10 bottom-1 absolute w-[30px] h-[30px]'
        : ''
    }`

  const handleResize = () => {
    if (window.innerWidth >= 1014) {
      setIsOpenBurguerMenu(true)
    }
    if (window.innerWidth < 1014) {
      setIsOpenBurguerMenu(false)
    }
  }
  window.addEventListener('resize', handleResize)

  useEffect(() => {
    handleResize()

    if (window.innerWidth < 1014) {
      // dispatch({ type: 'OPEN_BURGUER_MENU', value: !isOpenBurguerMenu })
      setIsResize(false)
    }
  })

  console.log(isResize)
  // useEffect(() => {
  //   handleResize()

  //   return () => {
  //     window.removeEventListener('resize', handleResize)
  //   }
  // }, [isOpenBurguerMenu])

  return (
    <nav
      className={isOpenBurguerMenu ? 'navStyleOpenMenu' : 'navStyleCloseMenu'}
    >
      <div
        className={
          isOpenBurguerMenu
            ? 'containerButtonStyleOpenMenu'
            : 'containerButtonStyleCloseMenu'
        }
      >
        <span
          onClick={() => {
            setIsOpenBurguerMenu(false)
            handleResize()
          }}
        >
          <NavLink to='/' onClick={() => dispatch({ type: 'ASCEND' })}>
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
      <div className={isOpenBurguerMenu ? 'containerLinksOpenMenu' : ''}>
        {isOpenBurguerMenu && (
          <>
            <ul className={isOpenBurguerMenu ? 'containerUlOpenMenu' : ''}>
              <li>
                <NavLink
                  onClick={() => {
                    dispatch({ type: 'ASCEND' })
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
                  to={"/men'sClothing"}
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
                  to={'/electronics'}
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
                  to={'/jewelery'}
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
                  to={"/women's-clothing"}
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
            <ul className={isOpenBurguerMenu ? 'containerUlOpenMenu' : '' }>
              <li
                onClick={() => {
                  setIsOpenBurguerMenu(false)
                  handleResize()
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

              {!isLoged
                ? (
                    ''
                  )
                : (
                <>
                  <li>
                    <NavLink
                      to={'/my-orders'}
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
                      to={'/my-account'}
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
                      to={'/log-out'}
                      className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      onClick={() => {
                        setIsOpenBurguerMenu(false)
                        handleResize()
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
        )}
      </div>
      <button
        onClick={() => {
          dispatch({ type: 'CH_CART', value: !isOpenCart })
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
