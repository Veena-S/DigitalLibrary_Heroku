import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListBooks from './components/ListBooks.jsx';
import SearchBooks from './components/SearchBooks.jsx';
import DisplayBooksList from './components/DisplayBooksList.jsx';
import LoginForm from './components/LoginForm.jsx';
import CustNavbar from './components/Navbar.jsx';
import BookCards from './components/BookCards.jsx';

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState('Guest');
  const [completeBooksList, setCompleteBooksList] = useState([]);
  const [booksPerCategory, setBooksPerCategory] = useState({});
  const [bookListToDisplay, setBookListToDisplay] = useState([]);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [genreList, setGenreList] = useState([]);
  const [displayeSearchResult, setDisplayeSearchResult] = useState(false);

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
      <ListBooks
        setCompleteBooksList={setCompleteBooksList}
        setBookListToDisplay={setBookListToDisplay}
        setBooksPerCategory={setBooksPerCategory}
        setGenreList={setGenreList}
      />
      <SearchBooks
        setSearchResult={setBookListToDisplay}
        booksList={[...completeBooksList]}
        genreList={[...genreList]}
        setDisplayeSearchResult={setDisplayeSearchResult}
        booksPerCategory={{ ...booksPerCategory }}
      />

      {(!displayeSearchResult && !showLoginForm)
      && (<BookCards booksPerCategory={booksPerCategory} loggedInUser={loggedInUser} />)}

      {(displayeSearchResult && !showLoginForm)
      && (<DisplayBooksList booksListToDisplay={bookListToDisplay} />)}

      {showLoginForm
      && (<LoginForm setLoggedInUser={setLoggedInUser} setShowLoginForm={setShowLoginForm} />)}

    </div>
  );
}
