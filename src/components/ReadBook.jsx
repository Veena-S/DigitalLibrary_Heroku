import React from 'react';
import { ReactReader } from 'react-reader';
import { Modal, Button } from 'react-bootstrap';

export default function ReadBook({ bookData, showBook, setShowBook }) {
  const handleCloseBook = () => setShowBook(false);
  return (

    <Modal
      id="modal-read-book"
      size="xl"
      show={showBook}
      animation={false}
      onHide={handleCloseBook}
      aria-labelledby={`modal-title-${bookData.id}`}
      centered
      scrollable
      dialogClassName="modal-90w"
    >
      <Modal.Header closeButton closeLabel="">
        <Modal.Title id={`modal-title-${bookData.id}`}>{bookData.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="reader-container">
          <ReactReader
            url={`/${bookData.content_location}`}
            title={bookData.title}
            location="epubcfi(/6/2[cover]!/6)"
            locationChanged={(epubcifi) => console.log('epubcifi - ', epubcifi)}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleCloseBook}>Close</Button>
      </Modal.Footer>
    </Modal>

  );
}
