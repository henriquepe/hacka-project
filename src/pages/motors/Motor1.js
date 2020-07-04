import React from 'react';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import MotorContainer from '../../features/dashboard/components/motorContainer/motorContainer';
import Menu from '../../shared/components/menu/Menu';

const data = [{ name: 'Motor1', uv: 58.1, pv: 2400, amt: 2400 }];

const Motor1 = () => {
  return (
    <div className="container">
      <Menu />
      <MotorContainer
        motorName="Motor 1"
        gas="58.1l"
        gasSaved="De consumo total de gasolina"
        iconUpDown={
          <ArrowDropUpIcon style={{ fontSize: '40px', color: 'green' }} />
        }
        treeSaved="nós salvamos 10 árvores com esse mortor hoje!"
      />
      <div className="graph container">
        <div className="graph row">
          <div className="graph col-sm-12 col-md-12 col-lg-12">
            <LineChart
              width={1290}
              height={400}
              data={data}
              margin={{ top: 20, right: 150, bottom: 5, left: -37 }}
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
  );
};

export default Motor1;
