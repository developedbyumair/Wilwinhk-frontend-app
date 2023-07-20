import React from 'react'
import { Drawer, Footer, Navbar, RFQCom } from '../../components'

function index() {
  return (
    <div className="theme-rfq">
      <Navbar />
      <Drawer />
      <RFQCom />
      <Footer />
    </div>
  );
}

export default index