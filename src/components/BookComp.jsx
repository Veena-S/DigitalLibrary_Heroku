import React, { useState } from 'react';
import axios from 'axios';
import ReadBook from './ReadBook.jsx';

export default function BookComp({ bookData, loggedInUser }) {
  const getMonthName = (monthId) => {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    return monthNames[monthId];
  };

  const getFormatDate = (dateValue) => {
    console.log(dateValue);
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    const valDate = new Date(dateValue);
    // return `${valDate.getDate()} ${monthNames[valDate.getMonth()]}, ${valDate.getFullYear()}`;
    return `${monthNames[valDate.getMonth()]} ${valDate.getFullYear()}`;
  };

  const publishedDate = `${getFormatDate(bookData.published_date)}`;

  // // To DO: https://medium.com/@beedaan/partial-collapse-with-bootstrap-3-ef4e6bf85537
  // const summaryParaEl = document.getElementById('summary-p');
  // const summaryParaVisibleLineHeight = summaryParaEl.style.fontSize * summaryParaEl.style.lineHeight * 3;

  const [showBook, setShowBook] = useState(false);
  const [disableRead, setDisableRead] = useState((loggedInUser === 'Guest'));
  const handleShowBook = () => setShowBook(true);
  const handleReadBook = () => {
    handleShowBook();
    // axios.post(`/read/${bookData.id}`)
    //   .then((resp) => { console.log(resp); })
    //   .catch((err) => { console.log(err); });
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
            <img className="author-image" src={bookData.author_image} alt={bookData.author} />
            <h6 className="cust-font-size-9">
              {bookData.author}
            </h6>
            <br />
            <br />
            <p className="cust-font-size-9">
              {bookData.publisher}
              {' '}
              <br />
              {publishedDate}
              <br />
              {'Pages: '}
              {bookData.total_pages}
              <br />
            </p>
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
        <p id="summary-p">{bookData.summary}</p>
      </div>
      <ReadBook bookData={bookData} showBook={showBook} setShowBook={setShowBook} />
    </div>
  );
}
