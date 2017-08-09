import React from 'react';
import logo from './images/logo.svg';
import 'normalize.css';
import 'flexboxgrid2/dist/flexboxgrid.css';
import './css/style.css';

export default () => {
    return (
<div className="header">
  <img src={logo} className="header-logo" alt="logo" />
</div>
    );
}