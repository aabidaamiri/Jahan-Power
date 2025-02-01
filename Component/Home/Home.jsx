import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../Header/Header"

import { Outlet } from "react-router-dom";


const Home = () => {

  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Home
