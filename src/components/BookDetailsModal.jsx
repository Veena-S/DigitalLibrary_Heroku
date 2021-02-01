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
  // const [showBook, setShowBook] = useState(false);
  // const [disableRead, setDisableRead] = useState((loggedInUser === 'Guest'));

  const handleCloseDetails = () => setShowBookDetails(false);

  // const handleShowBook = () => setShowBook(true);

  // const handleReadBook = () => {
  //   // To do: Update database for user-book
  //   handleShowBook();
  // };

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
      <Modal.Header closeButton closeLabel="">
        {/* <Modal.Title id={`modal-details-${bookData.id}`}>{bookData.title}</Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <BookComp bookData={bookData} loggedInUser={loggedInUser} />

        {/* <div className="mx-3">
          <div className="row mt-4">
            <div className="col">
              <figure>
                <img className="cover-page" src={bookData.cover_page} alt={bookData.cover_page} />
              </figure>
            </div>
            <div className="col">
              <div className="row">
                <h4><span>{bookData.title}</span></h4>
                <br />
                <h4>{bookData.subTitle}</h4>
                <h5>{bookData.author}</h5>
                <br />
                <p>
                  {bookData.publisher}
                  {' '}
                  <br />
                  {bookData.published_date}
                  <br />
                  {bookData.total_pages}
                  <br />
                </p>
              </div>
              <div className="row justify-content-end">
                <div className="col-3 me-5">
                  <a className="btn btn-sm btn-outline-dark" role="button"
                  href={`/${bookData.content_location}`} disabled={disableRead}>Download</a>
                </div>
                <div className="col-3 ms-2">
                  <button className="btn btn-sm btn-dark" type="button"
                  onClick={handleReadBook} disabled={disableRead}>Read</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <h6>Summary:</h6>
            <p>{bookData.summary}</p>
          </div>
          <ReadBook bookData={bookData} showBook={showBook} setShowBook={setShowBook} />
        </div> */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleCloseDetails}>Close</Button>
      </Modal.Footer>
    </Modal>

  );
}
