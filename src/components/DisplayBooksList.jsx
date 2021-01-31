import React, { useEffect, useState } from 'react';
import 'bootstrap/js/src/collapse.js';
import BookDetails from './BookDetails.jsx';

export default function DisplayBooksList({ booksListToDisplay }) {
  return (
    <div>
      {booksListToDisplay.length !== 0 && (
        booksListToDisplay.map((book, index) => (
          <div key={`book-${Number(index)}`}>
            <BookDetails bookData={book} />
          </div>
        ))
      )}

    </div>

  );
}
