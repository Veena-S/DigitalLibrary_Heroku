import React, { useState } from 'react';
import ListBooks from './components/ListBooks.jsx';
import LoginForm from './components/LoginForm.jsx';
import SearchBooks from './components/SearchBooks.jsx';
import DisplayBooksList from './components/DisplayBooksList.jsx';

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [booksList, setBooksList] = useState([]);
  const [searchResultBooksList, setSearchResult] = useState([]);

  return (
    <div className="container justify-content-center">
      <div className="row">
        <h3 className="text-center mt-4">Digital Library</h3>
      </div>
      <ListBooks setBooksList={setBooksList} />
      {loggedInUser === null && (<LoginForm setLoggedInUser={setLoggedInUser} />)}
      {loggedInUser !== null
      && (<SearchBooks setSearchResult={setSearchResult} booksList={[...booksList]} />)}
      <DisplayBooksList booksListToDisplay={searchResultBooksList} />
      {/* {loggedInUser !== null && (<ListBooks setBooksList={setBooksList} />)} */}
    </div>
  );
}
