async function FetchAllProducts (route, nameCategory, sort = 'desc') {
  const routes = {
    home: `https://fakestoreapi.com/products?sort=${sort}`,
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
