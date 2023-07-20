import React from 'react'
import { Categories, Drawer, Footer, Navbar } from '../../components'

function index() {
  return (
    <div className="theme-categories">
      <Navbar />
      <Drawer />
      <Categories />
      <Footer />
    </div>
  );
}

export default index