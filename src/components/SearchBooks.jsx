import React, { useState } from 'react';
import axios from 'axios';

const searchCriteria = [
  '',
  'title',
  'author',
  'genre',
  'language',
];

export default function SearchBooks({ setSearchResult, booksList }) {
  const [selectedSearchCriteria, setSelectedSearchCriteria] = useState('');
  const [searchByValue, setSearchByValue] = useState('');

  // const handleSearch = () => {
  //   axios.get(`/search?key=${selectedSearchCriteria}&&value=${searchByValue}`)
  //     .then((responseData) => {
  //       console.log(responseData.data);
  //       console.log([...responseData.data.books]);
  //       setSearchResult([...responseData.data.books]);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const handleSearch = () => {
    const searchResult = booksList.filter((book) => {
      if (Object.prototype.hasOwnProperty.call(book, selectedSearchCriteria)) {
        return (book[selectedSearchCriteria] === searchByValue); }
      return false; });
    setSearchResult([...searchResult]);
  };

  const handleSelectSearchBy = (event) => {
    setSelectedSearchCriteria(event.target.value);
  };

  const handleSearchByValueChange = (event) => {
    setSearchByValue(event.target.value);
  };

  return (
    <div className="container search-data mt-4">
      <div className="row">
        <div className="col">
          <label htmlFor="search-by">Search By </label>
          <select
            id="search-by"
            className="items-select-list"
            value={selectedSearchCriteria}
            onChange={handleSelectSearchBy}
          >
            {searchCriteria.map((searchBy, index) => (
              <option key={`option-${Number(index)}`} value={searchBy}>{searchBy}</option>
            ))}
          </select>
        </div>
        <div className="col input-group">
          <input type="text" value={searchByValue} onChange={handleSearchByValueChange} />
          <button type="button" onClick={handleSearch}>
            <i className="fas fa-search" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
