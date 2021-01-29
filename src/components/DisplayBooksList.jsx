import React, { useEffect, useState } from 'react';
import 'bootstrap/js/src/collapse.js';
import BookDetails from './BookDetails.jsx';

export default function DisplayBooksList({ booksListToDisplay }) {
  const [isBookDetailsCollapsedList, setIsBookDetailsCollapsedList] = useState(
    [...new Array(booksListToDisplay.length).fill(true)],
  );

  const handleToggleBookDetails = (bookIndex) => {
    isBookDetailsCollapsedList[bookIndex] = !isBookDetailsCollapsedList[bookIndex];
    setIsBookDetailsCollapsedList([...isBookDetailsCollapsedList]); };

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

                <a role="button" data-bs-toggle="collapse" data-bs-target={`#book-details-${index}`} aria-expanded={!isBookDetailsCollapsedList[index]} aria-controls={`book-details-${index}`} onClick={() => { handleToggleBookDetails(index); }}>
                  <figure>
                    <img className="cover-page" src={book.cover_page} alt={book.cover_page} />
                    <figcaption>{book.title}</figcaption>
                  </figure>

                </a>
              </div>
              {/* <div className="col">
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
              </div> */}
            </div>
            <div className={`${isBookDetailsCollapsedList[index] ? 'collapse' : ''} book-details`} id={`book-details-${index}`}>
              <BookDetails bookData={book} />
            </div>
          </div>
        ))
      )}

    </div>

  );
}
