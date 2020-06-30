/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div id="home">
      <div id="img" />
      <div id="logon">
        <div id="ws-logo" className="grid-template-columns-1" />
        <input
          placeholder="example@example.com"
          className="email grid-template-columns-1"
        />
        <input
          placeholder="password"
          className="senha grid-template-columns-1"
        />
      </div>
    </div>
  );
};

export default Login;
