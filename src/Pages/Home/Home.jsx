import React, { useContext } from 'react'
import { ContainerProducts } from '../../components/ContainerProducts/ContainerProducts'
import { MyContext } from '../../GeneralContext/GeneralContext'

function Home () {
  const {
    state: { optionSelected },
    dispatch
  } = useContext(MyContext)
  return (
    <>
      <div className=' border-b border  border-[#1c3166]/30 relative mt-[90px] flex justify-end  w-full  p-2'>
        <label
          htmlFor='sort'
          className='w-auto  rounded-md flex gap-10 justify-center border border-gray-300 p-1 font-bold text-xl  h-[50px] bg-[#e4faff]  items-center'
        >
          Ordenar: {'  '}
          <select
            name='sort'
            id='sort'
            onChange={(e) => dispatch({ type: 'ORDER', value: e.target.value })}
            className='font-light bg-[#e6edff] text-[#121d38] mix-blend-multiply h-[30px] m-0'
          >
            <option value='asc' className='font-light text-sm '>
              Ascendente
            </option>
            <option value='desc' className='font-light text-sm'>
              Descendente
            </option>
          </select>
        </label>
      </div>
      <ContainerProducts route={'home'} sort={optionSelected} />
    </>
  )
}

export { Home }
