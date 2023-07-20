import React from 'react'
import { CartCom, Drawer, Footer, Navbar } from '../../components'

function index() {
  return (
    <div>
      <Navbar />
      <Drawer />
      <CartCom />
      <Footer />
    </div>
  );
}

export default index