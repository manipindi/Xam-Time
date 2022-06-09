import {Button, Row, Col, Container, Nav} from 'react-bootstrap';
import React from "react";
import { Link } from "react-router-dom";
import './../App.css';

function AdminFooter() {
    return (
        <div className='admin-footer'>
            <Container bg="dark" variant="dark"> 
                {/* <Row>
                    <h6 style={{textAlign: 'center', marginBottom: '20px'}}>Rajiv Gandhi University of Knowledge Technologies, Nuzvid</h6>
                    <hr/>
                </Row>
                <Row>
                    <Col xs={12} md={4} >
                        <p><Link to="/features" variant="dark">Dashboard</Link></p>
                        <p><Link to="/pricing">People</Link></p>
                    </Col>
                    <Col xs={12} md={4} >
                        <p><Link to="#features">Dashboard</Link></p>
                        <p><Link to="#pricing">People</Link></p>
                    </Col>
                    <Col xs={12} md={4} >
                        <p><Link to="#features">Dashboard</Link></p>
                        <p><Link to="#pricing">People</Link></p>
                    </Col>
                </Row> */}
            
                <Row>
                    {/* <hr/> */}
                    <p style={{textAlign: 'center', }}>&copy; All rights reserved @ RGUKT Nuzvid</p>
                </Row>
            </Container>
        </div>
    );
  }
  
export default AdminFooter;
  