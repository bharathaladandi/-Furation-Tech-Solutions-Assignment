import React, { useState, useEffect } from 'react';
import {BookListing} from '../Components/BookListing';
import SearchBar from '../Components/SearchBar';
import axios from 'axios';


const Book = () => {

  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);


  
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('https://blossombackend.onrender.com/products');
      setBooks(response.data);
      setFilteredBooks(response.data);
    } catch (error) {
      console.log('Error fetching books:', error);
    }
  };
  // const handleSearch = (search) => {

  //   // Filter books based on the search
  //   const filtered = books.filter((book) =>
  //     book.title.toLowerCase().includes(search.toLowerCase())
  //   );
  //   setFilteredBooks(filtered);
  // };

  return (
    <div>
      <h2>Book Listing</h2>
      {/* <SearchBar /> */}
      <BookListing books={filteredBooks} />
      
    </div>
  );
};

export default Book;
