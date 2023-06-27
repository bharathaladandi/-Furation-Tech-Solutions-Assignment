import { CloseButton, Flex, Link, Select, useColorModeValue } from '@chakra-ui/react'
import { PriceTag } from './PriceTag'
import { CartProductMeta } from './CartProductMeta'
import {
    AspectRatio,
    Box,
    Button,
    HStack,
    Image,
    Skeleton,
    Stack,
    Text,
  } from '@chakra-ui/react'

import { remove } from '../../Redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

import { productsApi, useGetAllProductsQuery } from '../../Redux/productapi';
import { Rating } from '../books/Rating'


export const CartItem = (props) => {

//   const { items, status } = useSelector(state => state.products)
  const { data, error, isLoading } = useGetAllProductsQuery()

  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart);


  const products = useSelector((state) => state.cart);
//   const { product, rootProps } = props
//   const { category, rating, title, image, price, } = product

  const handleRemove = (productId) => {

    dispatch(remove(productId))
  }

  return (


    <Stack
    spacing={{
      base: '4',
      md: '5',
    }}
    // {...rootProps}
  >

{products && products.map((item) => (<div>

<Box position="relative">
          <AspectRatio ratio={4 / 4}>
            <Image
              src={item.image}
              alt={item.category}
              draggable="false"
              fallback={<Skeleton />}
              borderRadius={{
                base: 'md',
                md: 'xl',
              }}
            />
          </AspectRatio>
      {/* Desktop */}
        </Box>
        <Stack>
          <Stack spacing="1">
            <Text fontWeight="medium" color={('gray.700', 'gray.400')}>
              {item.title}
            </Text>
            <PriceTag price={item.price} salePrice={item.price} currency="USD" />
          </Stack>
          <HStack>
            <Rating defaultValue={3} size="sm" />
            <Text fontSize="sm" color={('gray.600', 'gray.400')}>
              12 Reviews
            </Text>
          </HStack>
        </Stack>



        <Stack align="center">
          <Button onClick={() => handleRemove(item._id)} colorScheme="blue" width="full">
          {/* Quick shop */} Remove
          </Button>
          <Link
            textDecoration="underline"
            fontWeight="medium"
            color={('gray.600', 'gray.400')}
          >
            {/* Quick shop */}
          </Link>
        </Stack>
        </div>
          ))}
          
      </Stack>
  )
}

