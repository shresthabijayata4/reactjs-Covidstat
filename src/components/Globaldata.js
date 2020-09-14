import React, { Component } from 'react';
import axios from 'axios';
import './Globaldata.css';
import { Row, Container, Col, Button } from 'react-bootstrap';
import {GiVirus} from 'react-icons/gi';
import {FaRegSmileBeam} from 'react-icons/fa';
import {ImSad} from 'react-icons/im';
import MyVerticallyCenteredModal from './Modal' ;

class Globaldata extends Component{
    state = {
        covidDataWorld: [],
        covidDataNepal: []
    }
    
    componentDidMount() {
        axios.get('https://api.covid19api.com/summary')
            .then(response => {
            this.setState({
                covidDataWorld: response.data.Global,
                covidDataNepal: response.data.nepal,
                covidDataglobaldate: response.data.Date,
            })
            console.log(response);
        }).catch(err => console.log(err));
    }

    render(){
        return(
            <React.Fragment>
                <div className="global-content-table">

                <div className="global-content">
                
                    <span className="bolder"><b>Global | </b></span> 
                    <span clasName="smaller">Recent updates</span>
                </div>
                    

                <Container className="border-global" >

                {/* <Row className="update-dates">
                    <Col>
                        <span><b>Last update</b></span>

                    </Col>
                    <Col>
                        <span><b>Date: </b>{this.state.covidDataglobaldate}</span>
                    </Col>
                </Row> */}
                <Row className="data-table">

                    <Col sm={4} className="positive-global-cases">

                        <ul className="global-confirmed-cases">
                                <div className="global-allcontents">
                                    <div className="img-icons">
                                        <i class="fa fa-thermometer-full" style={{ fontSize : '35px'}} aria-hidden="true"></i>
                                    </div> 
                                    <div className="li-global-set">
                                        <li className="data-global-show">{this.state.covidDataWorld.TotalConfirmed}</li> 
                                        <li><p>Total infected</p></li>
                                    </div>
                                </div>    
                        </ul>
                        
                    </Col>
                    <Col sm={4} className="death-global-cases">

                        <ul className="global-death-cases">
                            <div className="global-allcontents">
                            <li className="show-global-icons"><ImSad size='2rem'/></li> 
                            <div className="li-global-set">
                                <li className="data-global-show">{this.state.covidDataWorld.TotalDeaths}</li> 
                                <li><p>Death cases</p></li>
                            </div>
                            </div>     
                        </ul>
                    
                    </Col>
                    <Col sm={4} className="recovered-global-cases">
                        <ul className="global-recovered-cases">
                            <div className="global-allcontents">
                            <li className="show-global-icons"><FaRegSmileBeam size='2rem'/></li> 
                            <div className="li-global-set">
                                <li className="data-global-show">{this.state.covidDataWorld.TotalRecovered}</li> 
                                <li><p>Recovered</p></li>
                            </div>
                            </div>     
                        </ul>

                    </Col>
                    

                </Row>
                        
                        
                </Container>
                </div>
            </React.Fragment>
        );
    }
}
export default Globaldata;