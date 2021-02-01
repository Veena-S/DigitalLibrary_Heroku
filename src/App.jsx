import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListBooks from './components/ListBooks.jsx';
import SearchBooks from './components/SearchBooks.jsx';
import DisplayBooksList from './components/DisplayBooksList.jsx';
import LoginForm from './components/LoginForm.jsx';
import CustNavbar from './components/Navbar.jsx';

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState('Guest');
  const [completeBooksList, setCompleteBooksList] = useState([]);
  const [booksPerCategory, setBooksPerCategory] = useState({});
  const [bookListToDisplay, setBookListToDisplay] = useState([]);
  const [showLoginForm, setShowLoginForm] = useState(false);

  useEffect(() => {
    axios.get('/isLoggedIn')
      .then((responseData) => {
        if (responseData.data.userName === '') {
          setLoggedInUser('Guest');
        }
        else {
          setLoggedInUser(responseData.data.userName); }
      })
      .catch((error) => {
        console.log(error);
        setLoggedInUser('Guest');
      });
  });

  return (
    <div className="container justify-content-center">
      <CustNavbar
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
        setShowLoginForm={setShowLoginForm}
      />

      {(!showLoginForm)
      && (
      <ListBooks
        setCompleteBooksList={setCompleteBooksList}
        setBookListToDisplay={setBookListToDisplay}
        setBooksPerCategory={setBooksPerCategory}
      />
      )}

      {(!showLoginForm)
      && (<DisplayBooksList booksListToDisplay={bookListToDisplay} />)}

      {(!showLoginForm) && (
      <SearchBooks setSearchResult={setBookListToDisplay} booksList={[...completeBooksList]} />)}

      {showLoginForm
      && (<LoginForm setLoggedInUser={setLoggedInUser} setShowLoginForm={setShowLoginForm} />)}

    </div>
  );
}
