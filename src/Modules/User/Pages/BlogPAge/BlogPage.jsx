import React from 'react'
import { Blog, Drawer, Footer, Navbar } from '../../components'

function BlogPage() {
  return (
    <div>
      <Navbar />
      <Drawer />
      <Blog />
      <Footer />
    </div>
  );
}

export default BlogPage