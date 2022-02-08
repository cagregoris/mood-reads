import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';


function ListBooks() {

  const [renderedBooks, setRenderedBooks] = useState([])

  const getBooks = async() => {
    try {
      const response = await fetch("http://localhost:5000/books");
      const jsonData = await response.json();

      setRenderedBooks(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div>
      {renderedBooks.filter(book => book.mood.includes("cheerful")).map(filteredBook => {
        return (
          <h2>{filteredBook.title}</h2>
        )
      })}
    </div>
  )}

export default ListBooks;
