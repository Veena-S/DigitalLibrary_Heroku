/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState } from 'react';

import ReadBook from './ReadBook.jsx';

export default function BookDetails({ bookData }) {
  // This is to find whether the ReadBook button is clicked
  const [isBookRead, setIsBookRead] = useState(false);
  // To show or hide the "collapse" of book details
  const [isBookDetailsCollapsed, setIsBookDetailsCollapsed] = useState(true);
  // To show & hide the book modal
  const [showBook, setShowBook] = useState(false);

  const handleToggleBookDetails = () => {
    setIsBookDetailsCollapsed(!isBookDetailsCollapsed); };

  const handleShowBook = () => setShowBook(true);

  const handleReadBook = () => {
    setIsBookRead(true);
    handleShowBook();
  };

  return (
    <div>
      <div className="row border">
        <div className="col">
          <a
            role="button"
            data-bs-toggle="collapse"
            data-bs-target={`#book-details-${bookData.id}`}
            aria-expanded={!isBookDetailsCollapsed}
            aria-controls={`book-details-${bookData.id}`}
            onClick={handleToggleBookDetails}
          >
            <figure>
              <img className="cover-page" src={bookData.cover_page} alt={bookData.cover_page} />
              <figcaption>{bookData.title}</figcaption>
            </figure>
          </a>
        </div>
      </div>
      <div className={`${isBookDetailsCollapsed ? 'collapse' : ''} book-details`} id={`book-details-${bookData.id}`}>
        <div className="card card-body">
          <div className="row">
            <div className="col">
              <img className="cover-page" src={bookData.cover_page} alt={bookData.cover_page} />
            </div>
            <div className="col">
              <div className="row">
                <h1><span>{bookData.title}</span></h1>
                {/* <h3>{bookData.subTitle}</h3> */}
                <h3>{bookData.author}</h3>
                {/* <h4>{bookData.publisher}</h4>
            <h5>{bookData.published_date}</h5>
            <h6>{bookData.total_pages}</h6> */}
              </div>
              <div className="row">
                <a className="btn btn-secondary" role="button" href={`/${bookData.content_location}`}>Download</a>
                <button className="btn-sm btn-secondary mt-2" type="button" onClick={handleReadBook}>Read</button>
              </div>
            </div>
          </div>
          {/* {isBookRead && <ReadBook id="read-book" bookData={bookData} />} */}
          <ReadBook bookData={bookData} showBook={showBook} setShowBook={setShowBook} />

        </div>
      </div>
    </div>

  );
}
