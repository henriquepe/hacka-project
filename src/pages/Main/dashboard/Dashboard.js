import React from 'react';

import { AppBar, IconButton, Toolbar, Typography, Container, Tabs, Tab } from '@material-ui/core';
import { Menu, ExpandMore} from '@material-ui/icons';


import logoImg from '../login/assets/ships.png';
import './Dashboard.css';

const dashboard = () => {
    return (
      <div className="dashboard-container">
        <header>
          <AppBar className="header" position="fixed">
              <Container>
                <Toolbar className="toolbar" >
                  <IconButton  color="inherit">
                    <Menu/>
                  </IconButton>
                  <img src={logoImg} />
                  <div >
                    <Typography variant="h4">Carol</Typography>
                    <Typography variant="h6">Operador chefe</Typography>
                  </div>
                  <IconButton color="inherit">
                    <ExpandMore />
                  </IconButton>
                </Toolbar>
              </Container>
          </AppBar>
      </header>
    
      <h1>Acesso do operador</h1> 
      <div className="motors" >
      <ul>
        <li>
          <img src={logoImg} className="itens"/>
          <p>Motor 1 </p>      
          <strong>57.9L </strong>
          <p>De consumo de gasolina</p>
            <ExpandMore />
          <p className="arvores">10 árvores foram salvas hoje</p>
        </li>
        
      </ul>
      </div>
</div>
    )
  
};

export default dashboard;
