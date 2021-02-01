/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import {
  Nav, Navbar, Button,
} from 'react-bootstrap';
import axios from 'axios';

export default function CustNavbar({ loggedInUser, setLoggedInUser, setShowLoginForm }) {
  let loginBtnStr = '';
  if (loggedInUser === 'Guest' || loggedInUser === '' || loggedInUser === null) {
    loginBtnStr = 'Sign up / Login';
  }
  else {
    loginBtnStr = 'Logout';
  }

  const handleUserLogging = () => {
    if (loginBtnStr === 'Logout')
    {
      axios.delete('/logout')
        .then((responseData) => {
          console.log(responseData.data);
          setLoggedInUser('Guest');
          loginBtnStr = 'Sign up / Login';
        })
        .catch((error) => console.log(error));
    }
    else
    {
      setShowLoginForm(true);
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Navbar.Brand href="/home">BookShelf</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Text>{loggedInUser}</Navbar.Text>
        <Nav className="ms-auto pe-2">
          <Button variant="outline-info" size="sm" onClick={handleUserLogging}>{loginBtnStr}</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
