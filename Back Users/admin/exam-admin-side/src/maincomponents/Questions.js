import {Tab, Container, Tabs, Accordion, Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import 'react-quill/dist/quill.snow.css';
import TestControls from '../components/TestControls';
import ResponsesList from '../components/ResponsesList';
import Sections from '../components/Sections';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTestDetails } from './../store/reducers/testDetailsSlice';



var today = new Date();
var minStartDate = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
var minStartTime = ('0' + today.getHours()).slice(-2) + ':' + ('0' + today.getMinutes()).slice(-2);
var minStartDateTime = minStartDate + 'T'+ minStartTime;

function Questions() {
    const testDetails = useSelector((state) => state.testDetailsReducer);
    const dispatch = useDispatch();

    // [{ 'header': [false, 2, 3, 4] }],
    useEffect(() => {
        document.title = `Edit Test`;
      }, []);

    
    const saveTestDetails = (e) => {
        e.preventDefault();
        const newTestDetails = {
            testStartDateTime: e.target.testStartDateTime.value,
            testEndDateTime: e.target.testEndDateTime.value,
            studentInstructions: e.target.studentInstructions.value,
        }
        dispatch( updateTestDetails(
            newTestDetails
            ) );
        // console.log(testDetails);
    }
    

    return (
        <div className='questions'>
            <Container>
                <h4>Exam Details </h4>
                <hr/>
                <Tabs defaultActiveKey="controls" id="uncontrolled-tab-example" className="mb-3">
                    {/* <Tab eventKey="details" title="Details"> */}
                        {/* <h6> Instructions </h6> */}
                        {/* <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Details</Accordion.Header>
                                <Accordion.Body>
                                    <Form onSubmit={(e) => saveTestDetails(e)}>
                                        <Row>
                                            <Col xs={12} sm={6} className="mb-2">
                                                <Form.Group>
                                                    <Form.Label>Start Date & Time</Form.Label>
                                                    <Form.Control
                                                        type="datetime-local"
                                                        name="testStartDateTime"
                                                        defaultValue={testDetails.testStartDateTime}
                                                        min={minStartDateTime}
                                                        // onChange={(e) => handleChange('testStartDateTime', e.target.value)}
                                                    >
                                                    </Form.Control>
                                                </Form.Group>
                                            </Col>
                                            
                                            <Col xs={12} sm={6} className="mb-2">
                                                <Form.Group>
                                                    <Form.Label>End Date & Time</Form.Label>
                                                    <Form.Control
                                                        type="datetime-local"
                                                        name="testEndDateTime"
                                                        defaultValue={testDetails.testEndDateTime}
                                                        min={testDetails.testStartDateTime}
                                                        // onChange={(e) => handleChange('testEndDateTime', e.target.value)}
                                                    >
                                                    </Form.Control>
                                                </Form.Group>
                                            </Col>

                                        </Row>
                                        <Row>
                                            <Form.Group as={Col} xs={12} className="mb-2">
                                                <Form.Label>Instructions for students</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    name="studentInstructions"
                                                    rows={3}
                                                    placeholder="Enter instructions.."
                                                    defaultValue={testDetails.studentInstructions}
                                                    // onChange={(e) => handleChange('studentInstructions', e.target.value)}
                                                >
                                                </Form.Control>
                                            </Form.Group>
                                            <Col align="right">
                                                <Button variant='success' type="submit">Save</Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                    
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Instructions for Testmakers</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion> */}
                    {/* </Tab> */}

                    <Tab eventKey="questions" title="Questions">
                        <h6>Sections</h6>

                        <Sections />
                    </Tab>

                    <Tab eventKey="controls" title="Controls">
                        <TestControls />
                    </Tab>
                    <Tab eventKey="responses" title="Responses">
                        <ResponsesList />
                    </Tab>
                </Tabs>
            </Container>
        </div>
    );
}

export default Questions;