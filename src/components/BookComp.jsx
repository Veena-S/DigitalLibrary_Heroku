import React, { useState } from 'react';
import ReadBook from './ReadBook.jsx';

export default function BookComp({ bookData, loggedInUser }) {
  const [showBook, setShowBook] = useState(false);
  const [disableRead, setDisableRead] = useState((loggedInUser === 'Guest'));
  const handleShowBook = () => setShowBook(true);
  const handleReadBook = () => {
    // To do: Update database for user-book
    handleShowBook();
  };

  return (
    <div className="mx-3">
      <div className="row mt-4">
        <div className="col">
          <figure>
            <img className="cover-page" src={bookData.cover_page} alt={bookData.cover_page} />
            {/* <figcaption>{bookData.title}</figcaption> */}
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
            {/* <h6>{bookData.publisher}</h6>
                <h6>{bookData.published_date}</h6>
                <h6>{bookData.total_pages}</h6> */}
          </div>
          <div className="row justify-content-end">
            <div className="col-3 me-5">
              {(!disableRead)
              && (<a className="btn btn-sm btn-outline-dark" role="button" href={`/${bookData.content_location}`}>Download</a>)}
            </div>
            <div className="col-3 ms-2">
              <button className="btn btn-sm btn-dark" type="button" onClick={handleReadBook} disabled={disableRead}>Read</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <h6>Summary:</h6>
        <p>{bookData.summary}</p>
      </div>
      <ReadBook bookData={bookData} showBook={showBook} setShowBook={setShowBook} />
    </div>
  );
}
