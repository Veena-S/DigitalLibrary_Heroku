/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState } from 'react';
import BookComp from './BookComp.jsx';

export default function BookDetailsNonModal({ bookData, loggedInUser }) {
  return (
    <div className="container book-details px-5" id={`book-details-${bookData.id}`}>
      <BookComp bookData={bookData} loggedInUser={loggedInUser} />
    </div>
  );
}
