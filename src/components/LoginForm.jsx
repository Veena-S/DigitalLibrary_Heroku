import React, { useState } from 'react';
import axios from 'axios';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

export default function LoginForm({ setLoggedInUser, setShowLoginForm }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  const handleSignupUser = () => {
    axios.post('/signup', { email, password })
      .then((responseData) => {
        console.log(responseData.data);
        setLoggedInUser(responseData.data);
        setShowLoginForm(false);
      })
      .catch((error) => {
        console.log(error);
        setLoggedInUser('Guest');
        setShowLoginForm(false);
      });
  };

  const handleLoginUser = () => {
    axios.post('/login', { email, password })
      .then((responseData) => {
        console.log(responseData.data);
        setLoggedInUser(responseData.data.userName);
        setShowLoginForm(false);
      })
      .catch((error) => {
        console.log(error);
        setLoggedInUser('Guest');
        setShowLoginForm(false);
      });
  };

  return (
    <div id="login-details">
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text id="text-inputEmail">📧</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          type="email"
          id="email"
          value={email}
          name="email"
          placeholder="E-mail"
          aria-label="E-mail"
          aria-describedby="text-inputEmail"
          onChange={handleEmailChange}
        />
      </InputGroup>

      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text id="text-inputPassword">🔑</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          type="password"
          id="password"
          value={password}
          name="password"
          placeholder="Password"
          aria-label="Password"
          aria-describedby="text-inputPassword"
          onChange={handlePasswordChange}
        />
      </InputGroup>
      <Button variant="dark" size="sm" type="submit" id="submit-login" onClick={handleLoginUser}>Login</Button>
      <Button variant="dark" size="sm" type="button" id="submit-signup" onClick={handleSignupUser}>Sign-up</Button>
    </div>

  );
}
