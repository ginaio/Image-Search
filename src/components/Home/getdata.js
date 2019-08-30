import React from 'react';



const Filter = ( props ) => {
    return (
        <div className="Scontent">
            <p className="txt">See my picture</p>
            <input 
                type="text"
                className="filterin"
                placeholder="Put the Url"
                onChange={props.picName}
            />
            <button onClick={props.click} className="check">View
            </button>
            <div className="Simgb" style={{display: props.showStore ? 'block' : 'none' }}>
                <img 
                className="imgsize"
                src={props.picName2}
                alt=""
                //src="https://storage.googleapis.com/interview-resources/office-images/1200px-Channel_1_Israel_DSC0021.jpg" 
                />
            </div>
        </div>      
    )
};

export default Filter;