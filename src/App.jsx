import React, { useState } from 'react'
import './App.css'
import Header from '../Component/Header/Header'
import Home from '../Component/Home/Home'
import About from '../Component/About/About'

const App = () => {

  return (
    <div>
      <Header/>
      <Home/>
      <About/>
    </div>
  )
}

export default App
