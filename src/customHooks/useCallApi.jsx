import { useEffect, useState } from 'react'
import { FetchAllProducts } from '../ApiCall/FetchAllProducts'

function useCallApi (route, nameCategory) {
  const [dataProducts, setDataProducts] = useState([])

  useEffect(() => {
    const finalDataAllProducts = async () => {
      const apiData = await FetchAllProducts(
        route,
        nameCategory
      )
      setDataProducts(apiData)
    }
    finalDataAllProducts()
  }, [])

  return { dataProducts }
}

export { useCallApi }
