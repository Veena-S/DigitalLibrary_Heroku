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
      <Modal.Header closeButton={false}>
        <Modal.Title id={`modal-title-${bookData.id}`}>{bookData.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="reader-container">
          <ReactReader
            url={`/${bookData.content_location}`}
            title={bookData.title}
            location="epubcfi(/6/2[cover]!/6)"
            locationChanged={(epubcifi) => console.log(epubcifi)}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleCloseBook}>Close</Button>
      </Modal.Footer>
    </Modal>

  );

  // return (
  //   <div className="modal fade" id="modal-read-book" tabIndex="-1" role="dialog" aria-labelledby={`modal-title-${bookData.id}`} aria-hidden="true">
  //     <div className="modal-dialog modal-lg" role="document">
  //       <div className="modal-content">
  //         <div className="modal-header">
  //           <h5 className="modal-title" id={`modal-title-${bookData.id}`}>Modal title</h5>
  //           <button type="button" className="close" data-dismiss="modal" aria-label="Close">
  //             <span aria-hidden="true">&times;</span>
  //           </button>
  //         </div>
  //         <div className="modal-body">
  //           <p />
  //         </div>
  //         <div className="modal-footer">
  //           <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleCloseBook}>Close</button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

/**
 * position: relative; z-index: 1; height: 100%; width: 100%; background-color: rgb(255, 255, 255); transition: all 0.3s ease 0s;
 */
