import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo2.png'
import  './New.css';
import {Form} from 'react-bootstrap';
import $ from 'jquery';
import Data from './Data';
import {   BrowserRouter as Router, 
    Route, 
    Link, 
    Switch } from 'react-router-dom';




class New extends React.Component{

    componentDidMount(){
        $(function () {
            $(document).scroll(function () {
              var $nav = $(".fixed-top");
              $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
            });
          });
    }
    // handleClick = ()=>{
    //     return <Data />
    // };


    render(){
        return(
            <React.Fragment>
                <Router>
                <div className="New active">
                    <div className="nav-bar">
                        <nav className="navbar navbar-expand-lg fixed-top">
                            <a className="navbar-brand" href=""><img src={logo}></img></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item active">
                                        <a class="nav-link" href=""> Home
                                            <span class="sr-only">(current)</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#data">Nepal</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#global-data">Global</a>
                                    </li>
                                    {/* <li class="nav-item">
                                        <a class="nav-link" href="#footer-menu">Contact</a>
                                    </li> */}

                                </ul>
                                
                            
                           
                                
                            </div>
                        </nav>
                    </div>
                </div>
                </Router>
            </React.Fragment>
        );
    }

}
export default New;