import React, { useState, useEffect } from 'react';
import axios from 'axios';

import DisplayBooksList from './DisplayBooksList.jsx';

export default function ListBooks({
  setCompleteBooksList, setBookListToDisplay, setBooksPerCategory, setGenreList,
}) {
  // const [allBooksList, setAllBooksList] = useState([]);

  const separateBooksPerCategory = (listOfAllBooks) => {
    const booksPerCategory = {};
    const distinctGenres = [...new Set(listOfAllBooks.map((book) => book.genre))];
    setGenreList([...distinctGenres]);

    // Initializing an entry for each genre in the book list
    distinctGenres.forEach((currGenre) => { booksPerCategory[currGenre] = []; });
    listOfAllBooks.forEach((book) => {
      booksPerCategory[book.genre].push(book);
    });
    setBooksPerCategory({ ...booksPerCategory });
  };

  const handleGetAllBooks = () => {
    axios.get('/all')
      .then((responseData) => {
        console.log(responseData.data);
        console.log([...responseData.data.books]);
        setCompleteBooksList([...responseData.data.books]);
        // setAllBooksList([...responseData.data.books]);
        setBookListToDisplay([...responseData.data.books]);
        separateBooksPerCategory([...responseData.data.books]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => { handleGetAllBooks(); }, []);

  return (
    <div>
      {/* <div className="row"> */}
      {/* <button type="button" onClick={handleGetAllBooks}>Get all Books</button> */}
      {/* <DisplayBooksList
          id="all-books-list"
          booksListToDisplay={allBooksList}
        /> */}
      {/* </div> */}
    </div>
  );
}
