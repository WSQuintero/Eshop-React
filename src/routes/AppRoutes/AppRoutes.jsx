import React from 'react'
import { useRoutes } from 'react-router-dom'
import { Home } from '../../Pages/Home/Home'
import { MyAccount } from '../../Pages/MyAccount/MyAccount'
import { MyOrder } from '../../Pages/MyOrder/MyOrder'
import { MyOrders } from '../../Pages/MyOrders/MyOrders'
import { NotFound } from '../../Pages/NotFound/NotFound'
import { SignIn } from '../../Pages/SignIn/SignIn'
import { Clothes } from '../../Pages/Clothes/Clothes'
import { Electronics } from '../../Pages/Electronics/Electronics'
import { Furniture } from '../../Pages/Furniture/Furniture'
import { Shoes } from '../../Pages/Shoes/Shoes'
import { Others } from '../../Pages/Others/Others'

function AppRoutes () {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/clothes', element: <Clothes /> },
    { path: '/electronics', element: <Electronics /> },
    { path: '/furniture', element: <Furniture /> },
    { path: '/shoes', element: <Shoes /> },
    { path: '/others', element: <Others /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '*', element: <NotFound /> },
    { path: '/sign-in', element: <SignIn /> }
  ])
  return routes
}

export { AppRoutes }
