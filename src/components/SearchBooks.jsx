import React, { useState } from 'react';
import axios from 'axios';
import { DropdownButton, Dropdown } from 'react-bootstrap';

const searchCriteria = [
  'Choose...',
  'title',
  'author',
  'genre',
  'language',
  'pages',
  'publisher',
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
        // return (book[selectedSearchCriteria] === searchByValue);
        return (book[selectedSearchCriteria].search(new RegExp(searchByValue, 'i')) !== -1);
      }
      return false; });
    setSearchResult([...searchResult]);
  };

  const handleSelectSearchBy = (event) => {
    setSelectedSearchCriteria(event.target.value);
  };

  const handleSearchByValueChange = (event) => {
    setSearchByValue(event.target.value);
  };

  const handleFilterGenreByProperty = (propertyValue) => {
    const searchResult = booksList.filter((book) => {
      Object.keys(book).forEach((bookProperty) => (bookProperty.search(new RegExp(propertyValue, 'i')) !== -1));
    });
    setSearchResult([...searchResult]);
  };

  return (
    <div className="container-fluid bg-info search-data mt-1">
      <div className="row pt-3">
        <div className="col">
          <DropdownButton id="genre-nav-dropdown" size="sm" variant="dark" title="Genres">
            <Dropdown.Item as="button" onClick={() => { handleFilterGenreByProperty('children'); }}>Children</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => { handleFilterGenreByProperty('fiction'); }}>Fiction</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => { handleFilterGenreByProperty('non-fiction'); }}>Non-Fiction</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => { handleFilterGenreByProperty('novel'); }}>Novels</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="col input-group search-col">
          <label className="input-group-text search-by-label bg-secondary text-light" htmlFor="search-by">Search By </label>
          <select
            id="search-by"
            className="items-select-list form-select"
            value={selectedSearchCriteria}
            onChange={handleSelectSearchBy}
          >
            {searchCriteria.map((searchBy, index) => (
              <option key={`option-${Number(index)}`} value={searchBy} selected={(index === 0)}>{searchBy}</option>
            ))}
          </select>
        </div>
        <div className="col input-group search-col">
          <input type="text" className="form-control" value={searchByValue} aria-describedby="search-button" onChange={handleSearchByValueChange} />
          <button type="button" id="search-button" className="btn btn-sm btn-dark" onClick={handleSearch}>Search</button>
        </div>

      </div>
    </div>
  );
}
