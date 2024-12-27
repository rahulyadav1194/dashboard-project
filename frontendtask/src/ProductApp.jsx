import React from 'react'
import ProductNavbar from './products/ProductNavbar'
import { Outlet } from 'react-router-dom'

export default function ProductApp() {

    
  return (
    <div>
      <ProductNavbar/>
      <Outlet/>
    </div>
  )
}
