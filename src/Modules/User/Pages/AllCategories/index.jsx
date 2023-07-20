import React from 'react'
import { AllCategories, Drawer, Footer, Navbar } from '../../components'

function index() {
  return (
    <div>
        <Navbar/>
        <Drawer/>
        <AllCategories/>
        <Footer/>
    </div>
  )
}

export default index