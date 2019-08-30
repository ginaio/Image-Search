import React, { Component } from 'react';
import Toolbar from '../Navigation/toolbar';
import Visualcon from './Visualcon';

class Visual extends Component {
    state = {
        tmpType: '',
        tmpPic: '',
        ShowPic: false
    }
    
    typepic = (event) =>{
        this.setState({tmpType:event.target.value})
    }   

    showpic = (event) => {
        const doesShow = this.state.ShowPic
        this.setState({tmpPic:this.state.tmpType, ShowPic: !doesShow})
    }
    
    
    render(){
        return(       
            <React.Fragment>
            <Toolbar 
                showBack= {true}
            />
      
            <div className="f-content">
                 <Visualcon 
                       picName={( event ) => this.typepic(event)}
                       picName2={this.state.tmpPic}
                       click={( event ) => this.showpic( event )}
                       showStore={this.state.ShowPic}
                 />
            </div>
          </React.Fragment>      
        );
    }
}

export default Visual;