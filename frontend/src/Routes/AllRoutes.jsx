import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import { Homepage } from '../Components/Homepage'
// import { BookListing } from '../pages/BookListing'
import  Book  from '../pages/BookList'
import { BookDetails } from '../Components/BookDetails'
import { ShoppingCart } from '../Components/ShoppingCart'
import { Checkout } from '../Components/Checkout'
import Home from '../pages/Home'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/booklisting' element={<Book />} ></Route>
            <Route path='/bookDetails' element={<BookDetails />} ></Route>
            <Route path='/shoppingCart' element={<ShoppingCart />} ></Route>
            <Route path='/checkout' element={<Checkout />} ></Route>
        </Routes>
    </div>
  )
}
