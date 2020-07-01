/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { TextField, Button } from '@material-ui/core';
import logo from './assets/ws.png';

const Login = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="ships-img col-md-7 col-lg-7 col-sm-7" />
        <div className="logon col-md-5 col-lg-5 col-sm-5">
          <img src={logo} alt="ships" />
          <form className="form">
            <TextField
              id="email"
              className="textField"
              label="Email"
              type="text"
            />
            <div id="gambiarra" />
            <TextField
              className="textField"
              label="Senha"
              type="password"
              autoComplete="current-password"
            />
            <Link to="/dashboard">
              <Button id="btn" variant="contained">
                Entrar
              </Button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
