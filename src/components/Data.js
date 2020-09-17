import React, { Component } from 'react';
import axios from 'axios';
import './Data.css';
import { Row, Container, Col, Button } from 'react-bootstrap';
import {GiVirus} from 'react-icons/gi';
import {FaRegSmileBeam} from 'react-icons/fa';
import {ImSad} from 'react-icons/im';
import MyVerticallyCenteredModal from './Modal' ;






class Data extends Component{
    state = {
        covidDataWorld: [],
        covidDataNepal: []
    }
    
    componentDidMount() {
        axios.get('https://nepalcorona.info/api/v1/data/nepal')
            .then(response => {
            this.setState({
                covidDataWorld: response.data.global,
                covidDataNepal: response.data,
            })
            console.log(response);
        }).catch(err => console.log(err));
    }

    render(){
        return (
            <React.Fragment>
                <div className ="nepaldata-body">
                    <div className="Nepal-cases-table">
                        <div className="content-cases">
                            <span className="bolder"><b>Nepal | </b></span> 
                            <span clasName="below">Recent updates</span>
                        </div>
                    
                    <Container className="border-test">
                        <Row style={{width: '100%',
                            
                            } }>
                            <Col className="mt-2 ml-3" style={{width: '10%', padding:'0px'}}> 
                                <MyVerticallyCenteredModal />
                            </Col>
                        </Row>
                        <Row className="row-showdata">
                            <Col md={4} sm={12} className="nepaldata-col">
                                <ul className="confirmed-cases">
                                    <div className="nepal-allcontents">
                                    <li className="show-icons"><GiVirus fontWeight='1rem' size='3rem'/></li> 
                                    <div className="li-set">
                                        <li className="data-show">{this.state.covidDataNepal.tested_positive}</li> 
                                        <li><p>Confirmed cases</p></li>
                                    </div>
                                    </div>     
                                </ul>
                            </Col>
                            <Col md={4} sm={12} className="nepaldata-col" style={{paddingRight: ''}}>
                                <ul className="recovered-cases" >
                                    <div className="nepal-allcontents">
                                    <li className="show-icons"> <FaRegSmileBeam size='2.5rem'/> </li> 
                                    <div className="li-set">
                                    <li className="data-show">{this.state.covidDataNepal.recovered}</li> 
                                    <li><p> Recovered </p></li> 
                                    </div>
                                    </div>
                                </ul>
                            </Col>
                            <Col md={4} sm={12} className="nepaldata-col">
                                <ul className="death-cases">
                                    <div className="nepal-allcontents">
                                    <li className="show-icons"> <ImSad size='2.5rem'/> </li> 
                                    <div className="li-set">
                                    <li className="data-show">{this.state.covidDataNepal.deaths}</li> 
                                    <li><p>Deaths</p></li> 
                                    </div>
                                    </div>
                                </ul>

                            </Col>
                        </Row>
                        
                        </Container>
                    </div>
                </div>
            </React.Fragment>
        )
    }
} 
export default Data; 