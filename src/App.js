import React, { Component } from 'react';

import './App.css';



import Data from './components/Data';



import New from './components/New';

import Footer from './components/Footer';
import Globaldata from './components/Globaldata';
import jQuery from 'jquery';



class App extends Component {

  componentDidMount(){
    jQuery(document).ready(function(){
			jQuery('a').on('click',function () {
				// e.preventDefault();
		
				var target = this.hash,
				jQuerytarget = jQuery(target);
		
			jQuery('html, body').stop().animate({
				'scrollTop': jQuerytarget.offset().top-91
				}, 900, 'swing', function () {
				window.location.hash = target;
				});
			});
		});
  }

  render(){
    return(
      <div className="App">
       
        <New />
         
        <div className="walpaper">
          <div className="content">
          <h1 className="h1-content">Welcome to COVID meter</h1>
          <div className="buttons">
            <span className="pad-button"><a class="btn btn-outline-warning btn-lg" href="#global-data" id="button-pad" role="button">Global</a></span>
            <span className="pad-button"><a class="btn btn-outline-success btn-lg" href="#data" id="button-pad" role="button">Nepal</a></span>
          </div>
          </div>
        </div>

  
        <section id="data" >
          <Data /> 
        </section>

        <section id="global-data">
          <Globaldata />
        </section>

        <section id="footer-menu">
          <Footer />
        </section>

      </div>
    );
  }

 
}



export default App;
