import {Container, Button, Row, Col, InputGroup, FormControl, Form, FloatingLabel } from 'react-bootstrap';
import TestBox from './../components/TestBox';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Tests() {
    useEffect(() => {
        document.title = `All tests`;
      }, []);

    const testsState = useSelector((state) => state.testsReducer);


    return (
        <div className="tests-page">
            <Container>
                <h4>Tests</h4>
                <hr/>
                <Row className="no-gutter no-rounds" >
                    <Col sm={12} md={4}>
                        <Row className="no-gutter">
                            <Col sm={6} md={6} xs={12}>
                                <FloatingLabel controlId="floatingSelectGrid" label="Type">
                                    <Form.Select aria-label="Floating label select example"
                                        // onChange={e => onTestChange('year', e.target.value)}
                                    >
                                        <option>Select type</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                            <Col sm={6} md={6} xs={12}>
                                <FloatingLabel controlId="floatingSelectGrid" label="Branch">
                                    <Form.Select aria-label="Floating label select example"
                                        // onChange={e => onTestChange('year', e.target.value)}
                                    >
                                        <option>Select branch</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                        </Row>
                        
                    </Col>

                    <Col sm={12} md={4}>
                        <Row className="no-gutter">
                            <Col sm={6} md={6} xs={12}>
                                <FloatingLabel controlId="floatingSelectGrid" label="Year">
                                    <Form.Select aria-label="Floating label select example"
                                        // onChange={e => onTestChange('year', e.target.value)}
                                    >
                                        <option>Select Year</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                            <Col sm={6} md={6} xs={12}>
                                <FloatingLabel controlId="floatingSelectGrid" label="Section">
                                    <Form.Select aria-label="Floating label select example"
                                        // onChange={e => onTestChange('year', e.target.value)}
                                    >
                                        <option>Select Section</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                        </Row>
                            
                            
                        </Col>
                        <Col sm={12} md={4}>
                            <InputGroup >
                                <FormControl
                                    placeholder="Search"
                                    aria-label="search"
                                    aria-describedby="basic-addon2"
                                    style={{padding:"16px "}}
                                />
                                <Button variant="outline-secondary" id="button-addon2">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </Button>
                            </InputGroup>
                        </Col>

                    
                </Row>
                <Row>

                    {
                        testsState.map((test, index) => (
                            <Col md={6} key={index}>
                                <TestBox data={test}/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
           

        </div>
    );
}

export default Tests;