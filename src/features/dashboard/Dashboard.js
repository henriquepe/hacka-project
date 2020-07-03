import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Menu from '../../shared/components/menu/Menu';

import DateButton from './components/dateButton/dateButton';
import MotorContainer from './components/motorContainer/motorContainer';

import './Dashboard.css';

const data = [
  { name: 'Motor1', uv: 58.1, pv: 2400, amt: 2400 },
  { name: 'Motor2', uv: 42.1, pv: 2400, amt: 2400 },
  { name: 'Motor3', uv: 22.1, pv: 2400, amt: 2400 },
  { name: 'Motor4', uv: 12.5, pv: 2400, amt: 2400 },
];

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

          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <LineChart
                  width={1200}
                  height={300}
                  data={data}
                  margin={{ top: 20, right: 60, bottom: 5, left: -20 }}
                >
                  <Line type="natural" dataKey="uv" stroke="#8884d8" />
                  <CartesianGrid stroke="#ccc" strokeDasharray="3 3 " />
                  <XAxis dataKey="name" />
                  <YAxis />
                </LineChart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default dashboard;
