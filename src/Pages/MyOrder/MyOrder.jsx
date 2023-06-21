import React, { useContext } from 'react'
import { MyContext } from '../../GeneralContext/GeneralContext'
import { ContainerOrder } from '../../components/ContainerOrder/ContainerOrder'

function MyOrder () {
  const { state: { reviewOrder } } = useContext(MyContext)
  const totalPrice = reviewOrder.order.reduce((a, b) => {
    return a + b.price
  }, 0)
  return (
    <section className='border border-gray-400 px-10 py-5  mt-[70px] rounded-2xl w-[98%] '>
      <p className='flex flex-col sm:flex-row justify-between w-[100%] border-b  border-gray-500 pb-5'>
        <span className='font-bold text-sm'>
          Fecha: <span className='font-light'>{reviewOrder.date}</span>
        </span>

        <span className='font-bold'>
          Hora: <span className='font-light'>{reviewOrder.time}</span>
        </span>
      </p>
      <ContainerOrder dataProducts={reviewOrder}></ContainerOrder>
      <p className='font-bold text-start mt-6 border-t border-gray-400 p-3 text-2xl flex justify-between'>
        Precio total: <span className=' font-normal'> ${totalPrice}</span>
      </p>
    </section>
  )
}

export { MyOrder }
