import React from 'react'
import emptyPizza from '../../../imgs/empty-pizza-box.png'

const PageNotFound = () => {
  return (
    <div className='flex flex-col min-h-screen items-center justify-center' >
      <img src={emptyPizza} alt="not found pizza" className='w-64 mb-5' />
      <h1 className='text-8xl font-bold mb-8' >404</h1>
      <h2 className='text-2xl font-medium' >page doesn't exist</h2>
    </div>
  )
}

export default PageNotFound