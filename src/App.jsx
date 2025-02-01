import React, { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../Component/Home/Home'
import About from '../Component/About/About'
import Service from '../Component/Service/Service'
import Herosection from '../Component/Herosection/Herosection'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [
      {
        path: "/",
        element: <Herosection/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/service",
        element: <Service/>
      }
     
    ]
  }
])


const App = () => {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
