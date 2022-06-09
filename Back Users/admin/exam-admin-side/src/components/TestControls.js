import {Tab, Nav, Row, Col, Card, Table, Button} from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import ExamRoles from './ExamRoles';
import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTestMaker, removeTestMaker, addProctor, removeProctor, addEvaluator, removeEvaluator } from './../store/reducers/testRolesSlice';

function TestControls(){
    const testRolesState = useSelector((state) => state.testRolesReducer);
    const dispatch = useDispatch();

    const facultyData = testRolesState.facultyAll;

    const facultyEmails = facultyData.map(fac => fac.email);

    const newTestmaker = (email) => {
        dispatch( addTestMaker({email: email}) );
    }

    const remTestmaker = (idx) => {
        dispatch( removeTestMaker({index: idx}) );
    }

    const newProctor = (email) => {
        dispatch( addProctor({email: email}) );
    }

    const remProctor = (idx) => {
        dispatch( removeProctor({index: idx}) );

    }

    const newEvaluator = (email) => {
        dispatch( addEvaluator({email: email}) );

    }

    const remEvaluator = (idx) => {
        dispatch( removeEvaluator({index: idx}) );
    }

    return (
        <div>
            <h6> Test Roles </h6>
            <hr/>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col>
                    <Nav variant="pills" className="flex-column text-dark">
                        <Nav.Item>
                            <Nav.Link eventKey="first"><i className="fa fa-user-circle-o" aria-hidden="true"></i> &nbsp;Students</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second"><i className="fa fa-book" aria-hidden="true"></i> &nbsp;Test Creators</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third"><i className="fa fa-video-camera" aria-hidden="true"></i> &nbsp;Proctors</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="fourth"><i className="fa fa-check-square-o" aria-hidden="true"></i> &nbsp;Evaluators</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                </Row>
                <Row className='mt-4'>
                <Col>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <ExamRoles name={"Students"} />
                        </Tab.Pane>

                        <Tab.Pane eventKey="second">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Test Makers</Card.Title>
                                    
                                    <div>
                                        <Typeahead
                                            id="selectTestmaker"
                                            options={facultyEmails}
                                            placeholder="Type email and select testmaker"
                                            onChange={ (selected) => newTestmaker(selected[0]) } 
                                            minLength={1}
                                        />
                                    
                                        <br/>

                                        <Table bordered hover responsive striped>
                                            <thead>
                                                <tr>
                                                    <th>No.</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Remove</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                testRolesState.testMakers.map((testmaker, idx) => (
                                                    <tr key={idx}>
                                                        <td>{idx+1}</td>
                                                        <td>{testmaker.name}</td>
                                                        <td>{testmaker.email}</td>
                                                        <td>
                                                            <Button size="sm" variant="danger" 
                                                                style={{padding: "0px 8px"}}
                                                                onClick={(e) => remTestmaker(idx)}>
                                                                Remove <i className="fa fa-trash" aria-hidden="true"></i>
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                            </tbody>
                                        </Table>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Tab.Pane>

                        <Tab.Pane eventKey="third">  
                            <Card>
                                <Card.Body>
                                    <Card.Title>Proctors</Card.Title>
                                    
                                    <div>
                                        <Typeahead
                                            id="selectProctor"
                                            options={facultyEmails}
                                            placeholder="Type email and select proctor"
                                            onChange={ (selected) => newProctor(selected[0]) } 
                                            minLength={1}
                                        />
                                    
                                        <br/>

                                        <Table bordered hover responsive striped>
                                            <thead>
                                                <tr>
                                                    <th>No.</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Remove</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                testRolesState.proctors.map((proctor, idx) => (
                                                    <tr key={idx}>
                                                        <td>{idx+1}</td>
                                                        <td>{proctor.name}</td>
                                                        <td>{proctor.email}</td>
                                                        <td>
                                                            <Button size="sm" variant="danger" 
                                                                style={{padding: "0px 8px"}}
                                                                onClick={(e) => remProctor(idx)}>
                                                                Remove <i className="fa fa-trash" aria-hidden="true"></i>
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                            </tbody>
                                        </Table>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Tab.Pane>

                        <Tab.Pane eventKey="fourth">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Evaluators</Card.Title>
                                    
                                    <div>
                                        <Typeahead
                                            id="selectEvaluator"
                                            options={facultyEmails}
                                            placeholder="Type email and select evaluator"
                                            onChange={ (selected) => newEvaluator(selected[0]) } 
                                            minLength={1}
                                        />
                                    
                                        <br/>

                                        <Table bordered hover responsive striped >
                                            <thead>
                                                <tr>
                                                    <th>No.</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Remove</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                testRolesState.evaluators.map((proctor, idx) => (
                                                    <tr key={idx}>
                                                        <td>{idx+1}</td>
                                                        <td>{proctor.name}</td>
                                                        <td>{proctor.email}</td>
                                                        <td>
                                                            <Button size="sm" variant="danger" 
                                                                onClick={(e) => remEvaluator(idx)}
                                                                style={{padding: "0px 8px"}}
                                                            >
                                                                Remove <i className="fa fa-trash" aria-hidden="true"></i>
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                            </tbody>
                                        </Table>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
}

export default TestControls;