import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { ProductGrid } from '../pages/books/ProductGrid';
import { CartItem } from '../pages/Cart/CartItem';
import { useSelector, useDispatch } from 'react-redux';
import {
    Box,
    Flex,
    Heading,
    HStack,
    Stack,
    useColorModeValue as mode,
  } from '@chakra-ui/react'

// import { remove } from '../Redux/cartSlice';

export const ShoppingCart = () => {

    const products = useSelector((state) => state.cart);


    const itemlength = useSelector((state) => state.cart);
  return (
    <div>
        <Box
          maxW="7xl"
          mx="auto"
          px={{
            base: '4',
            md: '8',
            lg: '12',
          }}
          py={{
            base: '6',
            md: '8',
            lg: '12',
          }}
          marginTop='50px'
          marginBottom='50px'
        >


          <ProductGrid>
          {/* {products && products.map((item) => ( */}
              {/* //box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
              // <Box style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }} key={item._id}>
              //   <Link to={`/products/${item._id}`}>
              //     <img style={{ marginTop: '20px', alignItems: 'center', height: '100px', width: '130px' }} src={item.image} alt="prof.img" />
              //     <h6>{item.title}</h6>
              //     <h5> Price: {item.price}</h5>
              //   </Link>
              // </Box> */}
              {/* <Link key={item._id}> */}
                <CartItem />
              {/* </Link>
            // ))} */}
          </ProductGrid>
        </Box>
    </div>
  )
}
