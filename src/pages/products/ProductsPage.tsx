import React from 'react'
import { Outlet } from 'react-router-dom'

const ProductsPage = () => {
  return (
    <div>
      <h2>Products</h2>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default ProductsPage