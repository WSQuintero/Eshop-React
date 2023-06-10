import { useEffect, useState } from 'react'
import { FetchAllProducts } from '../logic/ApiCall/FetchAllProducts'

function useCallApi (route, nameCategory, sort) {
  const [dataProducts, setDataProducts] = useState([])

  useEffect(() => {
    const finalDataAllProducts = async () => {
      const apiData = await FetchAllProducts(route, nameCategory, sort)
      setDataProducts(apiData)
    }
    finalDataAllProducts()
  }, [sort])

  return { dataProducts }
}

export { useCallApi }
