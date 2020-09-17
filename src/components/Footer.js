import React, { Component } from 'react';
import './Footer.css';
import google from '../assets/images/googleplay.png';
import app from '../assets/images/appstore.png';


class Footer extends Component{
    render(){
    return(
        <React.Fragment>
            {/* <div className="footer-menu">
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
            </div> */}

            <footer class="site-section bg-light footer">
          <div className="container" id="footer-container">
            <div className="row mb-5 justify-content-center">
              <div className="col-md-3" style={{textAlign: 'center'}}>
                <h3 className="footer-title mb-3" >Follow Us</h3>
                <a href="https://www.facebook.com/AGI-Infotech-105915604518772/" className="social-circle m-2"><i class="fa fa-facebook" style={{color: 'blue', fontSize: '25px'}}></i></a>
                <a href="https://www.instagram.com/agiinfotech/" className="social-circle m-2"><i class="fa fa-instagram" style={{color: 'red', fontSize: '25px'}}></i></a>
                <a href="https://www.linkedin.com/in/agi-infotech-8676ba1b1" className="social-circle m-2"><i class="fa fa-linkedin-square" style={{color: 'dodgerblue', fontSize: '25px'}}></i></a>
                <p>&copy; 2020 AGI INFOTECH</p>
              </div>
            </div>
          </div>
            </footer>
        </React.Fragment>
    );
}
}
export default Footer;