import React from 'react';
import './toolbar.css';
import Logo from './logo.png';

const navigationItem = (props) => (
  <header className="Toolbar">
    <div className="Logo"><img src={Logo} alt="Helix"/></div>
    <div className="col" style={{display: props.showBack ? 'block' : 'none' }}>
      <a href="/FrontPage">
        <div className="con" >
          <div className="bar top"></div>
          <div className="bar middle"></div>
          <div className="bar bottom"></div>
        </div>
      </a>
    </div>
  </header>
);

export default navigationItem;

