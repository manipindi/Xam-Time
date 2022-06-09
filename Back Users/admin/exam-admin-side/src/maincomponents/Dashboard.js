import {Button, Row, Col, Alert, Container, Card, Modal, Form, InputGroup, FloatingLabel} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import TestBox from '../components/TestBox';
import { Typeahead } from 'react-bootstrap-typeahead';
import { useSelector, useDispatch } from 'react-redux';
import { createTest } from './../store/reducers/testsSlice';
// import NewTest from './../classes/NewTest.js';

function MyVerticallyCenteredModal(props) {
    const testsState = useSelector((state) => state.testsReducer);
    const dispatch = useDispatch();

    const [newTest, setNewTest] = useState({edit: true, isGroup: false, title: "", testMaker: [], description: "", instructions: "", groupName: [], year: "", branch: "", section: ""});
    const [testValid, setTestValid] = useState(
        {}
    )
    const onTestChange = (field, value) => {
        setNewTest({
            ...newTest,
            [field]: value
          })
    }

    const onCreateTest = () => {
        
        var tempValid = {}
        if(newTest.title === ""){
            tempValid = {
                ...tempValid,
                titleValid: "invalid"
            }
        }
        if(newTest.testMaker.length === 0){
            tempValid = {
                ...tempValid,
                testMakerValid: "invalid"
            }
        }
        if(newTest.instructions === ""){
            tempValid = {
                ...tempValid,
                instructionsValid: "invalid"
            }
        }
        if(newTest.groupName.length === 0){
            tempValid = {
                ...tempValid,
                groupNameValid: "invalid"
            }
        }
        if(newTest.branch === ""){
            tempValid = {
                ...tempValid,
                branchValid: "invalid"
            }
        }
        if(newTest.year === ""){
            tempValid = {
                ...tempValid,
                yearValid: "invalid"
            }
        }
        if(newTest.section === ""){
            tempValid = {
                ...tempValid,
                sectionValid: "invalid"
            }
        }

        if(newTest.title && newTest.instructions && newTest.testMaker.length){
            if(newTest.isGroup && newTest.groupName.length !=0){
                console.log("Valid as group");
                dispatch( createTest(newTest) );
                props.onHide();
            }
            else if(!newTest.isGroup && newTest.branch && newTest.year && newTest.section){
                console.log("Valid as students");
                dispatch( createTest(newTest) );
                props.onHide();
            }
            // console.log("Valid for now");
        }
        setTestValid({...tempValid});
    }
    // const onSwitchAction = () => {
    //     setIsSwitchOn(!isSwitchOn);
    // };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create Test
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
            <Form>
                
                <Row >
                    <Col xs={12}>
                        <Form.Group controlId="formGridTitle" className="mb-2">
                            <Form.Label>Name of the test</Form.Label>
                            <Form.Control placeholder="Enter Test Name" 
                                onChange={ e => onTestChange('title', e.target.value) } 
                                value={newTest.title}
                                isInvalid={testValid.titleValid === "invalid"}
                            />

                        </Form.Group>
                    </Col>
                    <Col >
                        <Form.Group controlId="formGridPassword" className="mb-2">
                            <Form.Label >
                                Test Creator Name
                            </Form.Label>
                            <Typeahead
                                id="selectEmail"
                                options={["uday@gmail.com", "reddy@gmail.com", "bhargav@gmail.com", "kashyap@gmail.com"]}
                                placeholder="Enter email"
                                onChange={ (selected) => {onTestChange('testMaker', selected)} } 
                                selected={newTest.testMaker}
                                minLength={1}
                                isInvalid={testValid.testMakerValid === "invalid"}

                            />

                        </Form.Group>
                    </Col>
                    

                    

                    <Col xs={12}>
                        <Form.Group className="mb-2" controlId="formGridAddress1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control placeholder="Description (optional)" 
                                onChange={ e => onTestChange('description', e.target.value) } 
                                value={newTest.description}

                            />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Instructions for testmakers</Form.Label>
                            <Form.Control as="textarea" rows={3} 
                                onChange={ e => onTestChange('instructions', e.target.value) } 
                                value={newTest.instructions}
                                isInvalid={testValid.instructionsValid === "invalid"}

                            />
                        </Form.Group>
                    
                    </Col>

                    

                    <Form.Group as={Col} md={6} controlId="formGridEdit">
                        <Form.Check 
                            onChange={e => onTestChange('edit', !newTest.edit)}
                            checked={newTest.edit}
                            type="switch"
                            id="custom-switch-edit"
                            label="Enable adding questions"
                        />
                    </Form.Group>
                    
                    <Form.Group as={Col} md={6} controlId="formGridisGroup" className="mb-2">
                        <Form.Check 
                            onChange={e => onTestChange('isGroup', !newTest.isGroup)}
                            checked={newTest.isGroup}
                            type="switch"
                            id="custom-switch-group"
                            label="Select from group"
                        />
                    </Form.Group>
                </Row>
                <Row style={newTest.isGroup? {display: 'none'}: {}} >
                    <Form.Label>Select student details</Form.Label>
                    <Col md>
                        <Form.Select aria-label="Floating label select example"
                            onChange={e => onTestChange('year', e.target.value)}
                            className="mb-1"
                            isInvalid={testValid.yearValid === "invalid"}

                        >
                            <option value="">Select year</option>
                            <option value="1">First</option>
                            <option value="2">Second</option>
                            <option value="3">Third</option>
                            <option value="4">Forth</option>

                        </Form.Select>
                    </Col>
                    <Col md>
                        <Form.Select aria-label="Floating label select example"
                            onChange={e => onTestChange('branch', e.target.value)}
                            className="mb-1"
                            isInvalid={testValid.branchValid === "invalid"}
                        >
                            <option value="">Select branch</option>
                            <option value="1">ECE</option>
                            <option value="2">CSE</option>
                            <option value="3">CIVIL</option>
                            <option value="4">MECH</option>
                            <option value="5">CHEM</option>
                            <option value="6">MME</option>
                            <option value="7">PUC</option>

                        </Form.Select>
                    </Col>
                    <Col md>
                        <Form.Select aria-label="Floating label select example"
                            onChange={e => onTestChange('section', e.target.value)}
                            className="mb-1"
                            isInvalid={testValid.sectionValid === "invalid"}

                        >
                            <option value="">Select section</option>
                            <option value="0">All</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>

                        </Form.Select>
                    </Col>
                </Row>
                    
                <Row style={newTest.isGroup? {}:{display: 'none'}}>
                    <Col xs={12} >
                        <Form.Group controlId="formGridPassword" className="mb-1">
                            <Form.Label >
                                Select Group
                            </Form.Label>
                            <Typeahead
                                id="selectGroup"
                                options={["N16 Remedial", "N17 Remedial", "Longterm Interns", "N16 Regular"]}
                                placeholder="Group Name"
                                onChange={ (selected) => onTestChange('groupName', selected) } 
                                selected={newTest.groupName}
                                minLength={1}
                                isInvalid={testValid.groupNameValid === "invalid"}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                
            </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onCreateTest} className='btn-success'>Create</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function Dashboard() {
    const [modalShow, setModalShow] = useState(false);
    const testsState = useSelector((state) => state.testsReducer);

    useEffect(() => {
        document.title = `Dashboard`;
      }, []);
    
    
    return (
        <div className="dashboard">
            <Container style={{paddingTop: '20px', paddingBottom: '20px'}}>
                <Alert variant="success" className='text-center bg-own'>
                    <Alert.Heading>Welcome back Admin!</Alert.Heading>
                    {/* <p>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                    lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                    fermentum.
                    </p> */}
                    {/* <hr /> */}
                </Alert>


                <Row className="gutter-space">
                    <Col>
                        <div className="create" onClick={() => setModalShow(true)}>
                            <h1 style={{fontSize: '40px'}}>+</h1>
                            <p>create test</p>
                        </div>
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </Col>
                </Row>

                <Row className="gutter-space">
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

export default Dashboard;





