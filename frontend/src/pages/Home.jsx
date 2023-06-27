import React, { useState, useEffect } from 'react';
import { Box, Button, Stack, Spinner, Tooltip, Center, Container, HStack } from '@chakra-ui/react';
import { useSearchParams } from "react-router-dom";

import { productsApi, useGetAllProductsQuery } from '../Redux/productapi';
import styles from './Book.module.css';
import Book from './BookList';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useSelector } from 'react-redux';
import {
    MdOutlineKeyboardArrowUp,
    MdOutlineKeyboardArrowDown,
  } from "react-icons/md";
  

  // Page Logic
const getpage = (val) => {

    val = Number(val);
  
    if (typeof val === "number" && val <= 0) {
      val = 1;
    }
    if (!val) {
      val = 1
    }
  
    return val
  };
  
  
  //Fetching Data
  const getData = (url) => {
  
    return fetch(url).then((res) => res.json())
  };
  
  

const Home = () => {


    
  const { items, status } = useSelector(state => state.products)
  const { data, error, isLoading } = useGetAllProductsQuery()

  const [click, setClick] = useState(true);
  const [click1, setClick1] = useState(true);
  const [sort_x, setSort_x] = useState("");


  
  const [isLoaded, setIsLoaded] = useState(false)

  let [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(
    getpage(searchParams.get("page")) || 1
  );

  const limit = 5;


  const getData = () => {
    if (sort_x === "lowtohigh") {
      return axios.get(`https://blossombackend.onrender.com/products/Hair/asc?page=${page}`);
    } else if (sort_x === "hightolow") {
      return axios.get(`https://blossombackend.onrender.com/products/Hair/desc?page=${page}`);
    } else if (sort_x === "ot") {
      return axios.get(`https://blossombackend.onrender.com/products/Hair/ot?page=${page}`);
    } else if (sort_x === "et") {
      return axios.get(`https://blossombackend.onrender.com/products/Hair/et?page=${page}`);
    } else if (sort_x === "tt") {
      return axios.get(`https://blossombackend.onrender.com/products/Hair/tt?page=${page}`);
    } else if (sort_x === "ff") {
      return axios.get(`https://blossombackend.onrender.com/products/Hair/ff?page=${page}`);
    } else if (sort_x === "af") {
      return axios.get(`https://blossombackend.onrender.com/products/Hair/af?page=${page}`);
    } else if (sort_x === "three") {
      return axios.get(`https://blossombackend.onrender.com/products/Hair/three?page=${page}`);
    } else if (sort_x === "four") {
      return axios.get(`https://blossombackend.onrender.com/products/Hair/four?page=${page}`);
    } else if (sort_x === "five") {
      return axios.get(`https://blossombackend.onrender.com/products/Hair/five?page=${page}`);
    } else {
      return axios.get(`https://blossombackend.onrender.com/products/Hair?page=${page}`);
    }
  };

  const sort_func = (event) => {
    setSort_x(event.target.value);
    getData(sort_x);
  };


    return (
        <Box style={{ display: 'flex', marginTop: '50px'}}>
            <h2>Welcome to the Bookstore!</h2>
            <Link to='/checkout'>
            <button>Checkout</button>
            </Link>
            <Link to='/shoppingCart'>
            <button> Shopping Cart</button>
            </Link>
            
        <Box className={styles.main__sales}>
          <Box className={styles.main__products}>
            {/* filter section  */}
            <Box style={{ marginTop: "30px" }} className={styles.refine}>
              <p className={styles.refine_head}>Refine</p>
              <Box>
                <hr />
              </Box>
              <Box className={styles.savings}>
                <Box onClick={() => setClick(!click)}>
                  <p>Get Products By Price Range</p>
                  {click ? (
                    <MdOutlineKeyboardArrowUp className={styles.arrow} />
                  ) : (
                    <MdOutlineKeyboardArrowDown className={styles.arrow} />
                  )}
                </Box>
              </Box>
              <Box
                className={
                  click ? `${styles.refine_option1}` : `${styles.refine_option2}`
                }
              >
                <Box className={styles.sorting}>
                  <Box></Box>
                  <select name="" id="" onChange={sort_func}>
                    <option value="defalt">Price</option>
                    <option value="ot">Less than $10</option>
                    <option value="et">$10 to $20</option>
                    <option value="tt">$20 to $30</option>
                    <option value="ff">$40 to $50</option>
                    <option value="af">Above $50</option>
                  </select>
                </Box>
              </Box>

              <Box className={styles.savings}>
                <Box onClick={() => setClick1(!click1)}>
                  <p>Get Products By Rating</p>
                  {click1 ? (
                    <MdOutlineKeyboardArrowUp className={styles.arrow} />
                  ) : (
                    <MdOutlineKeyboardArrowDown className={styles.arrow} />
                  )}
                </Box>
              </Box>
              <Box
                className={
                  click1 ? `${styles.refine_option1}` : `${styles.refine_option2}`
                }
              >
                <Box className={styles.sorting}>
                  <Box>Get Products By Rating</Box>
                  <select name="" id="" onChange={sort_func}>
                    <option value="defalt">Rating</option>
                    <option value="three">3</option>
                    <option value="four">4</option>
                    <option value="five">5</option>
                  </select>
                </Box>
              </Box>

              <Box className={styles.sorting}>
              <Box>Get Products By Sort :</Box>
              <select name="" id="" onChange={sort_func}>
                <option value="defalt">Sort By Price</option>
                <option value="lowtohigh">Price: Low to High</option>
                <option value="hightolow">Price: High to Low</option>
                {/* <option value="a-z">A-Z</option> */}
              </select>
            </Box>
            </Box>
          </Box>
        </Box>

            <Book />
        </Box>
    );
};

export default Home;