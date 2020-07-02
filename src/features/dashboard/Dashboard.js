import React from 'react';

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Menu from '../../shared/components/menu/Menu';

import DateButton from './components/dateButton/dateButton';
import MotorContainer from './components/motorContainer/motorContainer';

import './Dashboard.css';

const dashboard = () => {
  return (
    <>
      <Menu />
      <div style={{ marginTop: 80 }} className="container">
        <div style={{ marginBottom: 40 }} className="row">
          <div className="col-12">
            <div className="col-md-6 textHeaderOperator">
              Visualização do operador
            </div>
            <div className="col-md-6">
              <DateButton />
            </div>
          </div>
          <div className="container componentAlign">
            <div className="row ">
              <div className="col-sm-3 col-md-3 col-lg-3">
                <MotorContainer
                  motorName="Motor 1"
                  gas="58.1l"
                  gasSaved="De consumo total de gasolina"
                  iconUpDown={
                    <ArrowDropUpIcon
                      style={{ fontSize: '40px', color: 'green' }}
                    />
                  }
                  treeSaved="nós salvamos 10 árvores com esse mortor hoje!"
                />
              </div>
              <div className="col-sm-3 col-md-3 col-lg-3">
                <MotorContainer
                  motorName="Motor 2"
                  gas="42.1l"
                  gasSaved="De consumo total de gasolina"
                  iconUpDown={
                    <ArrowDropUpIcon
                      style={{ fontSize: '40px', color: 'green' }}
                    />
                  }
                  treeSaved="nós salvamos 8 árvores com esse mortor hoje!"
                />
              </div>
              <div className="col-sm-3 col-md-3 col-lg-3">
                <MotorContainer
                  motorName="Motor 3"
                  gas="22.1l"
                  gasSaved="De consumo total de gasolina"
                  iconUpDown={
                    <ArrowDropUpIcon
                      style={{ fontSize: '40px', color: 'green' }}
                    />
                  }
                  treeSaved="nós salvamos 6 árvores com esse mortor hoje!"
                />
              </div>
              <div className="col-sm-3 col-md-3 col-lg-3">
                <MotorContainer
                  motorName="Motor 4"
                  gas="12.5l"
                  gasSaved="De consumo total de gasolina"
                  iconUpDown={
                    <ArrowDropUpIcon
                      style={{ fontSize: '40px', color: 'green' }}
                    />
                  }
                  treeSaved="nós salvamos 0.5 árvores com esse mortor hoje!"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default dashboard;
