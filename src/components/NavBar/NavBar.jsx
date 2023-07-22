import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MyContext } from '../../GeneralContext/GeneralContext'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IconContext } from 'react-icons'
import { Links } from '../Links/Links'

function NavBar () {
  const {
    state: { isOpenCart, productsAdd, isOpenBurguerMenu },
    dispatch
  } = useContext(MyContext)
  const [isResize, setIsResize] = useState()

  const navStyle = isOpenBurguerMenu
    ? 'flex flex-col w-full h-[100vh]  lg:h-auto lg:flex-row items-center text-lg lg:text-sm gap-10'
    : 'flex w-full justify-between items-center '
  const containerButtonStyle = isOpenBurguerMenu
    ? 'flex  lg:flex-row gap-10 px-4 lg:bg-[#1c3166] bg-white text-gray-600 lg:text-gray-200 lg:w-auto text-4xl lg:text-sm justify-between p-2 mb-10 lg:mb-0 items-center relative w-[100%] top-o'
    : 'flex w-[90%] justify-between items-center'
  const containerLinks = isOpenBurguerMenu
    ? 'lg:flex lg:flex-row lg:justify-between flex flex-col w-[100%] justify-center gap-5'
    : ''

  const countProductStyle = `rounded-full w-5 h-5 border bg-gray-200 absolute -bottom-1 left-5 flex justify-center items-center place-content-center text-xl font-bold text-gray-500 text-center pb-1 
    ${
      isOpenBurguerMenu && window.innerWidth < 1015
        ? 'left-10 bottom-1 absolute w-[30px] h-[30px]'
        : false
    }`
  // const handleResize = () => {
  //   const windowWidth = window.innerWidth
  //   if (windowWidth >= 1015 && windowWidth <= 1017) {
  //     dispatch({ type: 'OPEN_BURGUER_MENU', value: true })
  //   } else {
  //     dispatch({ type: 'OPEN_BURGUER_MENU', value: false })
  //   }
  // }
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1014) {
      setIsResize(true)
      // dispatch({ type: 'OPEN_BURGUER_MENU', value: true })
    }

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
    <nav className={navStyle}>
      <div className={containerButtonStyle}>
        <span
          onClick={() => {
            dispatch({ type: 'OPEN_BURGUER_MENU', value: false })
            // handleResize()
          }}
        >
          <NavLink to='/' onClick={() => dispatch({ type: 'ASCEND' })}>
            Shopi
          </NavLink>
        </span>
        <button
          className='lg:hidden'
          onClick={() => {
            dispatch({ type: 'OPEN_BURGUER_MENU', value: !isOpenBurguerMenu })
          }}
        >
          <GiHamburgerMenu />
        </button>
      </div>
      <div className={containerLinks}>
        {isResize && <Links isResize ={isResize}/>}
        {isOpenBurguerMenu && (
          <>
            <Links />

          </>
        )}
      </div>
      <button
        onClick={() => {
          dispatch({ type: 'CH_CART', value: !isOpenCart })
          dispatch({ type: 'OPEN_BURGUER_MENU', value: false })
          // handleResize()
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
