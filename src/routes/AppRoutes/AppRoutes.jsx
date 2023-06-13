import React from 'react'
import { useRoutes } from 'react-router-dom'
import { Home } from '../../Pages/Home/Home'
import { MyAccount } from '../../Pages/MyAccount/MyAccount'
import { MyOrder } from '../../Pages/MyOrder/MyOrder'
import { MyOrders } from '../../Pages/MyOrders/MyOrders'
import { NotFound } from '../../Pages/NotFound/NotFound'
import { SignIn } from '../../Pages/SignIn/SignIn'
import { MensCLothing } from "../../Pages/Men'sClothing/Men'sClothing"
import { Electronics } from '../../Pages/Electronics/Electronics'
import { Jewelery } from '../../Pages/Jewelery/Jewelery'
import { WomensClothing } from '../../Pages/WomensClothing/WomensClothing'
import { Invoice } from '../../Pages/Invoice/Invoice'
import { SignUp } from '../../Pages/SignUp/SignUp'
import { LogOut } from '../../Pages/LogOut/LogOut'

function AppRoutes () {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: "/men'sClothing", element: <MensCLothing /> },
    { path: '/electronics', element: <Electronics /> },
    { path: '/jewelery', element: <Jewelery /> },
    { path: "/women's-clothing", element: <WomensClothing /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '*', element: <NotFound /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/sign-up', element: <SignUp /> },
    { path: '/invoice', element: <Invoice /> },
    { path: '/log-out', element: <LogOut /> }
  ])
  return routes
}

export { AppRoutes }
