import React from 'react';
import { ExpandMore } from '@material-ui/icons';
import Avatar from '@material-ui/core/Avatar';
import motor from '../../../../shared/assets/motor.png';

import './motorContainer.css';

export default function MotorContainer({
  motorName,
  gas,
  gasSaved,
  iconUpDown,
  treeSaved,
}) {
  return (
    <div className="motorComponent">
      <div className="container">
        <div className="row ">
          <div className="col-sm-12 col-md-12 col-lg-12 motorComponentAlign">
            <Avatar alt="Remy Sharp" src={motor} />
          </div>
        </div>
        <div className="row ">
          <div className="col-sm-12 col-md-12 col-lg-12 motorComponentAlign">
            <p>{motorName}</p>
          </div>
        </div>
        <div className="row ">
          <div className="col-sm-12 col-md-12 col-lg-12 motorComponentAlign">
            <div className="gasStyle">{gas}</div>
          </div>
        </div>
        <div className="row ">
          <div className="col-sm-12 col-md-12 col-lg-12 motorComponentAlign">
            <p className="gasSaved">{gasSaved}</p>
          </div>
        </div>
        <div className="row ">
          <div className="col-sm-12 col-md-12 col-lg-12 motorComponentAlign">
            {iconUpDown}
          </div>
        </div>
        <div className="row ">
          <div className="col-sm-12 col-md-12 col-lg-12 motorComponentAlign">
            <p className="treeSaved">{treeSaved}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
