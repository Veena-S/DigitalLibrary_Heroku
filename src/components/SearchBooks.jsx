import React, { useState } from 'react';
import axios from 'axios';
import { DropdownButton, Dropdown } from 'react-bootstrap';

const searchCriteria = [
  'Choose...',
  'title',
  'author',
  'genre',
  'language',
  // 'pages',
  'publisher',
];

export default function SearchBooks({
  setSearchResult, booksList, genreList, setDisplayeSearchResult, booksPerCategory,
}) {
  const [selectedSearchCriteria, setSelectedSearchCriteria] = useState('');
  const [searchByValue, setSearchByValue] = useState('');

  const handleSearch = () => {
    const searchResult = booksList.filter((book) => {
      if (Object.prototype.hasOwnProperty.call(book, selectedSearchCriteria)) {
        return (book[selectedSearchCriteria].search(new RegExp(searchByValue, 'i')) !== -1);
      }
      return false; });
    setSearchResult([...searchResult]);
    setDisplayeSearchResult(true);
  };

  const handleSelectSearchBy = (event) => {
    setSelectedSearchCriteria(event.target.value);
  };

  const handleSearchByValueChange = (event) => {
    setSearchByValue(event.target.value);
  };

  const handleFilterGenreByProperty = (propertyValue) => {
    console.log('handleFilterGenreByProperty: ', propertyValue);

    const searchResult = booksPerCategory[propertyValue];
    setSearchResult([...searchResult]);
    setDisplayeSearchResult(true);
  };

  return (
    <div className="container-fluid bg-info search-data mt-1">
      <div className="row pt-3">
        <div className="col">
          <DropdownButton id="genre-nav-dropdown" size="sm" variant="dark" title="Genres">
            {genreList.map((currGenre, index) => (
              <Dropdown.Item as="button" key={`genre-${Number(index)}`} onClick={() => { handleFilterGenreByProperty(currGenre); }}>{currGenre}</Dropdown.Item>
            ))}
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
