import React from 'react'
import { Outlet } from 'react-router-dom'

const ProductsPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-primery my-2" >ProductsPage</h1>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default ProductsPage