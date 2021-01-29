import React, { useState } from 'react';
import axios from 'axios';

export default function LoginForm({ setLoggedInUser }) {
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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLoginUser = () => {
    axios.post('/login', { email, password })
      .then((responseData) => {
        console.log(responseData.data);
        setLoggedInUser(responseData.data.userName);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEnterAsGuest = () => {
    setLoggedInUser({ name: 'Guest' });
  };

  return (
    <div>
      <div className="form-row" id="login-details">
        <div className="input-group mb-3">
          <span className="input-group-text" id="text-inputEmail">📧</span>
          <input type="email" id="email" className="form-control" value={email} name="email" placeholder="E-mail" aria-label="E-mail" aria-describedby="text-inputEmail" onChange={handleEmailChange} />
        </div>
      </div>

      <div className="form-row">
        <div className="input-group mb-3">
          <span className="input-group-text" id="text-inputPassword">🔑</span>
          <input type="password" id="password" className="form-control" value={password} name="password" placeholder="Password" aria-label="Password" aria-describedby="text-inputPassword" onChange={handlePasswordChange} />
        </div>
      </div>

      <div className="form-row row justify-content-centre">
        <div className="col-sm-4">
          <button type="button" id="submit-login" className="btn btn-sm" onClick={handleLoginUser}>Login</button>
        </div>
        <div className="col-sm-4">
          <button type="button" id="submit-signup" className="btn btn-sm" onClick={handleSignupUser}>Sign-up</button>
        </div>
        {/* <div className="col-sm-4 guest">
          <button type="button" id="as-guest" className="btn btn-sm" onClick={handleEnterAsGuest}>Enter as a Guest</button>
        </div> */}
      </div>

    </div>

  );
}
