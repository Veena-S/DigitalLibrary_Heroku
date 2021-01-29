import React, { useState, useEffect } from 'react';
import axios from 'axios';

import DisplayBooksList from './DisplayBooksList.jsx';

export default function ListBooks({ setBooksList }) {
  const [allBooksList, setAllBooksList] = useState([]);

  const handleGetAllBooks = () => {
    axios.get('/all')
      .then((responseData) => {
        console.log(responseData.data);
        console.log([...responseData.data.books]);
        setBooksList([...responseData.data.books]);
        setAllBooksList([...responseData.data.books]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => { handleGetAllBooks(); }, []);

  return (
    <div className="mt-4">
      <div className="row">
        {/* <button type="button" onClick={handleGetAllBooks}>Get all Books</button> */}
        <DisplayBooksList booksListToDisplay={allBooksList} />
      </div>
    </div>
  );

  // return (
  //   <div>
  //     <div className="row">
  //       <button type="button" onClick={handleGetAllBooks}>Get all Books</button>
  //       {allBooksList.length !== 0 && (
  //         allBooksList.map((book, index) => (
  //           <div className="row border">
  //             <div className="col">
  //               <img className="cover-page" src={book.cover_page} alt={book.cover_page} />
  //             </div>
  //             <div className="col">
  //               {book.title}
  //             </div>
  //             <div className="col">
  //               {book.author}
  //             </div>
  //             <div className="col">
  //               {book.genre}
  //             </div>
  //             <div className="col">
  //               {book.language}
  //             </div>
  //             <div className="col wrap-col">
  //               {book.summary}
  //             </div>
  //             <div className="col">
  //               {book.created_at}
  //             </div>
  //           </div>
  //         ))
  //       )}
  //     </div>

  //   </div>

  // );
}
