import React, { useContext } from 'react'
import { MyContext } from '../../GeneralContext/GeneralContext'
import { Card } from '../Card/Card'
import { useNavigate } from 'react-router-dom'

function CartProducts () {
  const {
    state: { isOpenCart, productsAdd, isLoged, tryBuyWithoutLogIn },
    dispatch
  } = useContext(MyContext)

  const cartProductsStyle = `fixed top-0 flex flex-col min-h-[450px] max-h-[530px] transition-all duration-2000 rounded-3xl p-7 border-2 border-gray-400 ${
    productsAdd.length !== 0 ? 'justify-start' : 'justify-center text-white'
  } items-center place-content-center fixed w-[350px] h-5/6 bg-gray-50 -right-custom-size top-20 transition duration-500 transform ${
    isOpenCart ? '-translate-x-[335px]' : 'translate-x-10'
  }`

  const totalPrice = productsAdd.reduce((a, b) => a + b.price, 0)
  const history = useNavigate()

  const handleClickPay = () => {
    if (isLoged) {
      history('/invoice')
      dispatch({ type: 'NO_SELL' })
      dispatch({ type: 'CH_CART', value: !isOpenCart })
    } else {
      history('/sign-in')
      dispatch({ type: 'CH_CART', value: !isOpenCart })
      dispatch({ type: 'TRY_BUY_WITHOUT_LOGIN', value: !tryBuyWithoutLogIn })
    }
  }

  return (
    <div
      className={`${isOpenCart ? 'w-[100vw] h-[100vh] bg-bgCart fixed' : ''}`}
    >
      <aside className={cartProductsStyle}>
        {productsAdd.length !== 0 && (
          <h3 className='font-bold text-gray-600 text-lg'>
            ¿LISTO PARA COMPRAR?
          </h3>
        )}
        <div className='flex overflow-scroll w-[100%] p-4 mt-4 gap-10 relative'>
          {productsAdd.length !== 0
            ? (
                productsAdd.map((product) => (
              <Card
                key={`${product.title}${product.price}`}
                Category={product.Category}
                title={product.title}
                price={product.price}
                images={product.images}
                description={product.description}
              />
                ))
              )
            : (
            <strong className='text-gray-800 text-center'>
              No tienes productos agregados
            </strong>
              )}
        </div>
        {productsAdd.length !== 0 && (
          <>
            <span className='w-4/5 flex justify-between'>
              <strong>Total a pagar: </strong>
              {totalPrice.toFixed(2)}
            </span>

            <button
              onClick={handleClickPay}
              className='w-auto h-10 border border-gray-400 rounded-lg p-5 flex justify-center items-center bg-white text-gray-800 font-bold absolute bottom-3'
            >
              Ir a pagar
            </button>
          </>
        )}
      </aside>
    </div>
  )
}

export { CartProducts }
