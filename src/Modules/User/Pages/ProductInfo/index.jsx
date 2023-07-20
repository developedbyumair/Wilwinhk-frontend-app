import React from 'react'
import { Drawer, Footer, Navbar, Product } from '../../components'

function index() {
  return (
    <div className="product-page-bg">
      <Navbar />
      <Drawer />
      <Product />
      <Footer />
    </div>
  );
}

export default index