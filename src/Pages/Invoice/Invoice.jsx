import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../GeneralContext/GeneralContext'
import Confetti from 'react-confetti'

function Invoice () {
  const {
    state: { productsAdd, isSell },
    dispatch,
    setUserInFirebase,
    getUserById,
    actualUser2,
    resOrders
  } = useContext(MyContext)
  const actualUser = JSON.parse(sessionStorage.getItem('actualUser')) || {}
  const [finalOrder, setFinalOrder] = useState([])

  useEffect(() => {
    async function resolveOrders () {
      const user = await getUserById(actualUser.email)
      if (user) {
        setFinalOrder(await user.orders || resOrders)
      }
    }
    resolveOrders()
  }, [])

  const totalPrice = productsAdd.reduce((a, b) => a + b.price, 0)
  const toAdd = [
    ...finalOrder,
    {
      order: [...productsAdd],
      email: JSON.parse(sessionStorage.getItem('actualUser')).email,
      date: new Date().toLocaleDateString('es-ES', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }),
      time: new Date().toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      })
    }
  ]

  return (
    <div className='flex flex-col items-center justify-center h-[95vh] w-full'>
      {isSell === false && (
        <>
          <div className='mt-20 border border-gray-400 p-10 min-h-[60%] w-[50%] min-w-[300px] rounded-3xl bg-green-300/10'>
            <h2 className='text-center font-bold border-b border-dotted border-gray-500 p-3'>
              Invoice
            </h2>
            <ul className='w-full flex flex-col gap-5 mt-10 border-b border-dotted border-gray-500 pb-10'>
              {productsAdd.map((product) => {
                return (
                  <li
                    className='flex justify-between w-[100%] items-center'
                    key={product.price + product.title}
                  >
                    <img src={product.images} alt='' className='w-[20px]' />
                    <p className='text-xs'>
                      {product.title.substring(0, 20)}
                      {' : '}
                    </p>{' '}
                    <span className='text-xs font-semibold'>
                      {'$'}
                      {product.price}
                    </span>
                  </li>
                )
              })}
            </ul>
            <div className='w-[100%] flex justify-between '>
              <p className='text-sm mt-5'>Precio Total: </p>
              <span className='font-bold mt-5'>
                {'$ '}
                {totalPrice.toFixed(1)}
              </span>
            </div>
          </div>
          <button
            onClick={() => {
              dispatch({ type: 'IS_SELL' })
              dispatch({ type: 'ADD_ORDERS', value: toAdd })
              dispatch({ type: 'ADD_PRODUCT', value: [] })
              setUserInFirebase({ ...actualUser2, orders: toAdd }, actualUser2.email)
              dispatch({ type: 'SET_ORDERS', value: toAdd })
              localStorage.removeItem('productsAdd')
            }}
            className='border border-gray-400 p-4 rounded-xl mt-5 hover:bg-green-400  hover:text-white font-bold'
          >
            Comprar
          </button>
        </>
      )}
      {isSell && (
        <div className=' h-[90%] flex flex-col gap-2 items-center '>
          <img
            src='https://i.pinimg.com/originals/7f/cf/a1/7fcfa1896b7b1d59c72742922ba816aa.png'
            width={500}
            alt=''
          />
          <h2 className='font-bold text-[25px] text-green-600 absolute bottom-20'>
            Tu compra ha sido completada
          </h2>

          <Confetti width={window.innerWidth} height={window.innerHeight} />
        </div>
      )}
    </div>
  )
}

export { Invoice }
