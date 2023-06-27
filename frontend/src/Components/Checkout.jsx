import React, { useState} from 'react'
import { CartItem } from '../pages/Cart/CartItem'
import { useSelector, useDispatch } from 'react-redux';
import {
    Box,
    Flex,
    Heading,
    HStack,
    Link,
    Stack,
    useColorModeValue as mode,
  } from '@chakra-ui/react'

import { remove } from '../Redux/cartSlice';



export const Checkout = () => {

    const products = useSelector((state) => state.cart);


    const itemlength = useSelector((state) => state.cart);
  return (
    <Box style={{ marginTop: '50px' }}>
      <Box
        maxW={{
          base: '3xl',
          lg: '7xl',
        }}
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
      >
        <Stack
          direction={{
            base: 'column',
            lg: 'row',
          }}
          align={{
            lg: 'flex-start',
          }}
          spacing={{
            base: '8',
            md: '16',
          }}
        >
          <Stack
            spacing={{
              base: '8',
              md: '10',
            }}
            flex="2"
          >
            <Heading fontSize="2xl" fontWeight="extrabold">
              Shopping Cart ({itemlength.length} items)
            </Heading>
            {/* {
          products && products.map((item) => ( */}
            <Stack spacing="6">
              {products && products.map((item) => (
                <CartItem key={item._id} {...item} />
              ))}
            </Stack>
            {/* ))
      } */}
          </Stack>



          <Flex direction="column" align="center" flex="1">
            {/* <CartOrderSummary /> */}
            <HStack mt="6" fontWeight="semibold">
              <p>or</p>
              <Link color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
            </HStack>
          </Flex>
        </Stack>
      </Box>
    </Box>
  )
}
