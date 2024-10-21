import React from "react"
import Home from './ui/Home'
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import Menu,{loader as menuLoader} from './features/menu/Menu'
import Cart from './features/cart/Cart'
import Order,{loader as orderLoader} from "./features/oreder/Order"
import CreateOrder,{action as createOrderAction} from './features/oreder/CreateOrder'
import AppLoyout from "./ui/AppLoyout"
import Error from "./ui/Error"


const router = createBrowserRouter(
[  
  {
    ////this is the same as make routes in route in oldway
    element : <AppLoyout/>,
    //if error accured show this componet
    errorElement : <Error/>,
    children : [
      {
        path:'/',
        element : <Home/>
      },
      {
        path:'/menu',
        element : <Menu/>,
        loader:menuLoader,
        errorElement : <Error/>,

      },
      {
        path:'/cart',
        element : <Cart/>
      },
      {
        path:'/order/new',
        element : <CreateOrder/>,
        //to connect action to componetn
        action:createOrderAction
      },
      {
        path:'/order/:orderId',
        element : <Order/>,
        loader:orderLoader,
        errorElement : <Error/>,
      }
    ]
  },

]
)



function App(){
  return (
   <>
    <RouterProvider router={router}/>
   </>
  )
}
export default App