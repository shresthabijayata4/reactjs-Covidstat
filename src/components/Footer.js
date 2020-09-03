import React, { Component } from 'react';
import './Footer.css';
import google from '../assets/images/googleplay.png';
import app from '../assets/images/appstore.png';


class Footer extends Component{
    render(){
    return(
        <React.Fragment>
            <div className="footer-menu">
                <div className="container">
                    <div className="row" id="upper-footer">
                        
                        <div className= "col-sm-6">
                            
                            <h3 style={{fontWeight:'bold'}}>COVID-19 Hotline Number</h3>
                            <ul className="contact-no">
                                <li>1133 (24 Hours)</li>
                                <li>1115 (06:00 AM - 10:00 PM)</li>
                                <li>9851-255-834 | 9851-255-837 (08:00 AM - 08:00 PM)</li>

                            </ul>
                            
                        </div>
                        <div className="col-sm-6">
                            <div className="download-content"> Download Our Mobile App</div>
                            <div className="link-images">
                                <ul>
                                    <li>
                                        <a href=""><img src={google}></img></a>
                                    </li>
                                    <li className="app-store">
                                         <a href=""><img src={app} className="app"></img></a>
                                        
                                    </li>
                                </ul>
                            </div>
                        </div>
                       
                    </div>
                    <div className="row" id="seperator">

                    </div>
                    <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4"></div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
}
export default Footer;