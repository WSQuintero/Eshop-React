import React, { useContext } from 'react'
import { MyContext } from '../../GeneralContext/GeneralContext'
import { useNavigate } from 'react-router-dom'

function MyOrders () {
  const { state: { orders }, addOrDeleteOrders, dispatch } =
    useContext(MyContext)
  const totalPrice = (order) => {
    return order.reduce((a, b) => {
      return a + b.price
    }, 0)
  }
  const history = useNavigate()
  const userOrders =
    orders.filter(
      (order) =>
        order.email === JSON.parse(sessionStorage.getItem('actualUser')).email
    ) || []

  return (
    <div className='w-[90%] absolute top-20 flex flex-col gap-6 '>
      {userOrders.length !== 0
        ? (
            userOrders?.map((order, index) => (
          <article
            key={index}
            className='w-[100%] border border-gray-500 cursor-pointer relative'
            onClick={() => {
              history('/my-order')
              dispatch({ type: 'REVIEW_ORDER', value: order })
            }}
          >
            <button
              onClick={(event) => {
                event.stopPropagation()
                addOrDeleteOrders(order)
              }}
              className='w-[30px] h-[30px] flex  hover:bg-red-500 hover:text-white font-bold justify-center items-center p-3 border border-gray-400 absolute -right-5 -top-5 bg-white rounded-full'
            >
              X
            </button>
            <div className='w-[100%] text-center border-b border-b-gray-500'>
              <span>
                <strong>Compra realizada el: </strong> {order.date}{' '}
              </span>
              <span>
                <strong> a las:</strong> {order.time}{' '}
              </span>
            </div>
            <ul className='flex flex-col gap-3 p-4'>
              {order.order.map((product) => {
                return (
                  <li key={product.title} className='flex justify-between'>
                    <figure className='flex gap-2'>
                      <img
                        src={product.images}
                        alt=''
                        className='w-[20px] rounded-full'
                      />
                      <figcaption>{product.title.substring(0, 20)}</figcaption>
                    </figure>
                    <span>${product.price}</span>
                  </li>
                )
              })}
            </ul>
            <p className='flex justify-between border-t border-dotted border-gray-700 p-4'>
              <strong className='ml-2'>Total cancelado </strong>
              <span className='font-semibold'>${totalPrice(order.order)}</span>
            </p>
          </article>
            ))
          )
        : (
        <p className='font-bold text-gray-400 text-center mt-[150px] text-[25px]'>
          No tienes ordenes aún
        </p>
          )}
    </div>
  )
}

export { MyOrders }
