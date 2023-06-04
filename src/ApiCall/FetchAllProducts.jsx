async function FetchAllProducts (route, nameCategory) {
  const routes = {
    home: 'https://fakestoreapi.com/products',
    category: `https://fakestoreapi.com/products/category/${nameCategory}`
  }
  try {
    const response = await fetch(
      route !== nameCategory ? routes[route] : routes.category
    )
    const responseJson = await response.json()
    return responseJson
  } catch (error) {
    console.log(error)
  }
}

export { FetchAllProducts }
