import React, { useState } from 'react';
import data from 'data';
import './index.css';
import Toolbar from '../Navigation/toolbar';
import Popup from 'reactjs-popup';

const getData = () => data;
const storageBase = 'https://storage.googleapis.com/';

export default function Home() {
  const images = getData();
  const [filteredImages] = useState(images);

  return (
    <React.Fragment>
      <Toolbar 
        showBack= {true}
      />
      
      <p className="txt">Filter what you want</p>
      <input
        className="filterin"
        placeholder="Filter by keyword (e.g. people, plants, chairs)" 
      />

      <div className="content">
        {filteredImages.map((path, index) => (
          <Popup trigger={
            <div className="imgb" > 
            
            <img
              className="imgsize"
              alt=""
              key={index}
              src={storageBase + filteredImages[index]}
            />
            
          </div>
          }     
          modal
          closeOnDocumentClick>
            
          <div>            
            <img
              className="imgsize"
              alt=""
              key={index}
              src={storageBase + filteredImages[index]}
            />
          </div>
          </Popup>
        ))}
      </div>
    </React.Fragment>
  );
}
