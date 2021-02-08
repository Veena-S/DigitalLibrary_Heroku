/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import BookComp from './BookComp.jsx';

export default function BookDetailsModal({
  bookData, showBookDetails, setShowBookDetails, loggedInUser,
}) {
  const handleCloseDetails = () => setShowBookDetails(false);

  return (

    <Modal
      id="modal-book-details"
      size="lg"
      show={showBookDetails}
      animation={false}
      onHide={handleCloseDetails}
      aria-labelledby={`modal-details-${bookData.id}`}
      centered
      scrollable
      dialogClassName="modal-90w"
    >
      <Modal.Header closeButton closeLabel="" />
      <Modal.Body>
        <BookComp bookData={bookData} loggedInUser={loggedInUser} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleCloseDetails}>Close</Button>
      </Modal.Footer>
    </Modal>

  );
}
