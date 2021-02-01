import React, { useEffect, useState } from 'react';
import 'bootstrap/js/src/collapse.js';
import BookDetailsNonModal from './BookDetailsNonModal.jsx';

export default function DisplayBooksList({ booksListToDisplay }) {
  return (
    <div>
      {booksListToDisplay.length !== 0 && (
        booksListToDisplay.map((book, index) => (
          <div key={`book-${Number(index)}`}>
            <BookDetailsNonModal bookData={book} />
          </div>
        ))
      )}
    </div>

  );
}
