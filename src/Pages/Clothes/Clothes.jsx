import React from 'react'
import { ContainerProducts } from '../../components/ContainerProducts/ContainerProducts'

function Clothes () {
  return (
    <ContainerProducts
      route={'clothes'}
      nameCategory={'clothes'}
      idCategory={1}
    />
  )
}

export { Clothes }
