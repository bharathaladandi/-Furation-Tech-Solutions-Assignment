import React from 'react'
import { Route, Router } from 'react-router-dom'
import { Homepage } from '../Components/Homepage'
import { BookListing } from '../Components/BookListing'
import { BookDetails } from '../Components/BookDetails'
import { ShoppingCart } from '../Components/ShoppingCart'
import { Checkout } from '../Components/Checkout'

export const AllRoutes = () => {
  return (
    <div>
        <Router>
            <Route path='/' element={<Homepage />} ></Route>
            <Route path='/BookListing' element={<BookListing />} ></Route>
            <Route path='/BookDetails' element={<BookDetails />} ></Route>
            <Route path='/ShoppingCart' element={<ShoppingCart />} ></Route>
            <Route path='/Checkout' element={<Checkout />} ></Route>
        </Router>
    </div>
  )
}
