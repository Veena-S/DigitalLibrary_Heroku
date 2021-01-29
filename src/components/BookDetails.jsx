import React, { useState } from 'react';

export default function BookDetails({ bookData }) {
  const handleDownloadBook = () => {

  };

  const handleReadBook = () => {

  };

  return (
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
    </div>
  );
}
