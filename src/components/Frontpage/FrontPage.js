import React from 'react';
import './FrontPage.css';
import Toolbar from '../Navigation/toolbar';


export default function FrontPage() {
  return (
    <React.Fragment>
      <Toolbar />

      <div className="f-content">
        <div className="PDT20"></div>
        <div className="flex"><p className="Signal">Changing the definition</p></div>
        <div className="flex"><p className="Signal">of FAST</p></div>
        <div className="flex PDT10">
          <a href="/Visual" className="bttn">Visualise</a>
        </div>
        <div className="flex">
          <a href="/Home" className="bttn">Filter</a>
        </div>
        <div className="flex PDB20"><p className="rights">© 2019 HELIX RE, Inc. All rights reserved.</p></div>
      </div>
    </React.Fragment>
  );
}
