/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState, useContext } from 'react';
import BookDetailsModal from './BookDetailsModal.jsx';

export default function SingleBookCard({ book, loggedInUser }) {
  const [showBookDetails, setShowBookDetails] = useState(false);

  const handleToggleBookDetailsView = () => {
    setShowBookDetails(true);
  };

  return (
    <div className="col cover-page-thumb-col">
      <div className="card h-100">
        <a
          role="button"
            // data-bs-toggle="collapse"
            // data-bs-target={`#book-details-${book.id}`}
            // aria-expanded={!isBookCollapsed}
            // aria-controls={`book-details-${book.id}`}
          onClick={handleToggleBookDetailsView}
        >
          <img src={book.cover_page} alt={book.cover_page} className="card-img-top cover-page-thumb" />
          <div className="card-body">
            <h6 className="card-title">{book.title}</h6>
            <p className="card-text">{book.author}</p>
          </div>
        </a>
      </div>
      <BookDetailsModal
        bookData={book}
        showBookDetails={showBookDetails}
        setShowBookDetails={setShowBookDetails}
        loggedInUser={loggedInUser}
      />
    </div>

  );
}
