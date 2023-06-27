import React, { useState } from 'react';
import { Homepage } from './Homepage';
import { ProductGrid } from '../pages/books/ProductGrid';
import { Box, Button, Input } from '@chakra-ui/react';
import { productsApi, useGetAllProductsQuery } from '../Redux/productapi';

import { useDispatch, useSelector } from 'react-redux';
import { setQuery, setDatas, search, setResults, setLoading, setError } from '../Redux/serachSilce';
import { useEffect } from 'react';


export const BookListing = () => {


    const dispatch = useDispatch();
    const { query, results, datas, loading } = useSelector((state) => state.search);


    useEffect(() => {


        const fetchData = async () => {
            try {
              const response = await fetch(`https://hilarious-kerchief-crab.cyclic.app/product?category=${query}`);
              const datas = await response.json();
              dispatch(setDatas(datas));
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };

        fetchData();
    }, [dispatch]);



    const handleSearch = () => {
        dispatch(search());
    };

    const handleInputChange = (event) => {
        const query = event.target.value;
        dispatch(setQuery(query));
    };

    return (
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
            <Input type="text" onChange={handleInputChange} value={query} />
            <Button onClick={handleSearch}>Search</Button>
            <ProductGrid>
                {results?.map((book) => (
                    <Homepage key={book._id} book={book} />
                ))}
            </ProductGrid>
        </Box>
    );
};
