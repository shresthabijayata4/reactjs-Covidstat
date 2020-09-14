import React, { Component } from 'react';

import './Data.css';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';


class Test extends React.Component {

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
      }).catch(err => console.log(err));
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          {/* <h3 style={{
            textAlign: 'center',
            fontWeight: 'bold',
              fontFamily: 'courier new',
              color: '#777'}}>Global Data</h3>
          <Row>
            <Col xs={12} md={8} style={{
              fontFamily: 'courier new',
              color: '#777',
              fontWeight: 'bold'
            }}>
              Global Confirmed Cases
              <p style={{ color: 'black' }}>{this.state.covidDataWorld.positive}</p>
            </Col>
            <Col xs={6} md={4} style={{
              fontFamily: 'courier new',
              color: '#777',
              fontWeight: 'bold'
            }}>
              Global Death Cases
              <p style={{ color: 'black' }}>{this.state.covidDataWorld.deaths}</p>
            </Col>
          </Row>
          <hr></hr> */}

          {/* <h3 style={{
            textAlign: 'center',
            fontWeight: 'bold',
              fontFamily: 'courier new',
              color: '#777'}}>Nepal Data</h3> */}
          <Row>
            {/* <Col xs={6} md={4} style={{
              fontFamily: 'courier new',
              color: '#777',
              fontWeight: 'bold'
            }}>
              Total PCR Test
              <p style={{ color: 'black' }}>{this.state.covidDataNepal.samples_tested}</p>
            </Col> */}
            <Col xs={6} md={4} style={{
              fontFamily: 'courier new',
              color: '#777',
              fontWeight: 'bold'
            }}>
              Total RDT Test
              <p style={{ color: 'black' }}>{this.state.covidDataNepal.tested_rdt}</p>
            </Col>
            <Col xs={6} md={4} style={{
              fontFamily: 'courier new',
              color: '#777',
              fontWeight: 'bold'
            }}>
              Negative Cases
              <p style={{ color: 'black' }}>{this.state.covidDataNepal.tested_negative}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4} style={{
              fontFamily: 'courier new',
              color: '#777',
              fontWeight: 'bold'
            }}>
              Total In Quarantie
              <p style={{ color: 'black' }}>{this.state.covidDataNepal.quarantined}</p>
            </Col>
            <Col xs={6} md={4} style={{
              fontFamily: 'courier new',
              color: '#777',
              fontWeight: 'bold'
            }}>
              Total In Isloation
              <p style={{ color: 'black' }}>{this.state.covidDataNepal.in_isolation}</p>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}



export default Test;
