import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Home.jsx'
import CustomerApp from './CustomerApp.jsx'
import AddCustomer from './customer/AddCustomer.jsx'
import CustomerPannel from './customer/CustomerPannel.jsx'
import ViewCustomer from './customer/ViewCustomer.jsx'
import UpdateCustomer from './customer/UpdateCustomer.jsx'
import ProductApp from './ProductApp.jsx'
import ProductPannel from './products/ProductPannel.jsx'
import AddProduct from './products/AddProduct.jsx'
import AddCategory from './products/AddCategory.jsx'
import ViewProduct from './products/ViewProduct.jsx'
import UpdateProduct from './products/UpdateProduct.jsx'



let router = createBrowserRouter(
  createRoutesFromElements(

    <>
    <Route path='/' element ={<Home/>}/>

<Route path='/customer' element ={<CustomerApp/>}>
    <Route path='' element= {<CustomerPannel/>} />
    <Route path='/customer/addCustomer' element={<AddCustomer/>}/>
    <Route path='/customer/view/:id' element={<ViewCustomer/>}/>
    <Route path='/customer/update/:id' element={<UpdateCustomer/>}/>
    

</Route>

<Route path='/product' element ={<ProductApp/>} >
<Route path='' element={<ProductPannel/>}/>
<Route path='/product/addproduct' element={<AddProduct/>}/>
<Route path='/product/addcategory' element={<AddCategory/>}/>
<Route path='/product/view/:id' element={<ViewProduct/>}/>
<Route path='/product/update/:id' element={<UpdateProduct/>}/>



</Route> 
    
    </>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
