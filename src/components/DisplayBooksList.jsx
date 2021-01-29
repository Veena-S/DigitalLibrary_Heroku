import React, { useState } from 'react';
import 'bootstrap/js/src/collapse.js';
import BookDetails from './BookDetails.jsx';

export default function DisplayBooksList({ booksListToDisplay }) {
  const [isBookDetailsCollapsed, setIsBookDetailsCollapsed] = useState(true);

  const handleToggleBookDetails = () => { setIsBookDetailsCollapsed(!isBookDetailsCollapsed); };

  return (
    <div>
      {booksListToDisplay.length !== 0 && (
        booksListToDisplay.map((book, index) => (
          <div key={`book-${Number(index)}`}>
            <div className="row border">
              <div className="col">
                {/* <img className="cover-page" src={book.cover_page} alt={book.cover_page} />
                <button type="button" data-bs-toggle="collapse"
                data-bs-target={`#book-details-${index}`} aria-expanded={isBookDetailsCollapsed}
                 aria-controls={`book-details-${index}`}
                 onClick={handleToggleBookDetails}>Details</button> */}

                <button type="button" data-bs-toggle="collapse" data-bs-target={`#book-details-${index}`} aria-expanded={isBookDetailsCollapsed} aria-controls={`book-details-${index}`} onClick={handleToggleBookDetails}>
                  <img className="cover-page" src={book.cover_page} alt={book.cover_page} />
                </button>
              </div>
              <div className="col">
                {book.title}
              </div>
              <div className="col">
                {book.author}
              </div>
              <div className="col">
                {book.genre}
              </div>
              <div className="col">
                {book.language}
              </div>
              <div className="col wrap-col">
                {book.summary}
              </div>
              <div className="col">
                {book.created_at}
              </div>
            </div>
            <div className={`${isBookDetailsCollapsed ? 'collapse' : ''} book-details`} id={`book-details-${index}`}>
              <BookDetails bookData={book} />
            </div>
          </div>
        ))
      )}

    </div>

  );
}
