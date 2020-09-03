import React, { Component } from 'react';

import './App.css';



import Data from './components/Data';



import New from './components/New';

import Footer from './components/Footer';




class App extends Component {
  render(){
    return(
      <div className="App">
       
        <New />
         
        <div className="walpaper">
          <div className="content">
          <h1 className="h1-content">Welcome to COVID meter</h1>
          <div className="buttons">
            <span className="pad-button"><button type="button" id="button-pad" class="btn btn-outline-warning btn-lg">Global</button></span>
            <span className="pad-button"><button type="button" id="button-pad" class="btn btn-outline-success btn-lg">Nepal</button></span>
          </div>
          </div>
        </div>

  
        
        <Data /> 

        <Footer />

      </div>
    );
  }

 
}



export default App;
