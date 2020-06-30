/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="container">
      <div className="login">
        <div id="login-image" />
        <div id="logon">
          <div id="ws-logo" />
          <div id="form-logon">
            <input placeholder="example@example.com" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
