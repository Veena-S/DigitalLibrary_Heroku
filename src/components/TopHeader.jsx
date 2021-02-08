/* eslint-disable jsx-a11y/anchor-is-valid */

// https://getbootstrap.com/docs/4.1/examples/blog/#
import React from 'react';
import LoginForm from './LoginForm.jsx';

export default function TopHeader({ loginData, setLoggedInUser }) {
  let loginBtnStr = '';
  if (loginData === null) {
    loginBtnStr = 'Sign up / Login';
  }
  else {
    loginBtnStr = 'Logout'; }

  const handleUserLogging = () => {
    if (loginBtnStr === 'Logout')
    {
      // To do
    }
    else
    {
      <LoginForm setLoggedInUser={setLoggedInUser} />;
    }
  };

  return (
    <header className="top-header bg-dark py-3">
      <div className="row justify-content-between align-items-center">
        <div className="col-4 text-center">
          <a className="header-logo text-dark" href="/home">BookShelf</a>
        </div>
        <div className="col-4 d-flex justify-content-end align-items-center">
          <a className="btn btn-sm btn-outline-secondary" href="#" onClick={handleUserLogging}>{loginBtnStr}</a>
        </div>
        <div className="col-4 pt-1">
          <a className="text-muted" href="#">About</a>
        </div>
      </div>
    </header>
  );
}
