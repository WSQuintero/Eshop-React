import React from 'react'
import { useRoutes } from 'react-router-dom'
import { Home } from '../Home/Home'
import { MyAcount } from '../MyAcount/MyAcount'
import { MyOrder } from '../MyOrder/MyOrder'
import { MyOrders } from '../MyOrders/MyOrders'
import { NotFound } from '../NotFound/NotFound'
import { SignIn } from '../SignIn/SignIn'
import './App.css'

function App () {
  return (
    <>
      <Home />
      <MyAcount />
      <MyOrder />
      <MyOrders />
      <NotFound />
      <SignIn />
    </>
  )
}

export default App
