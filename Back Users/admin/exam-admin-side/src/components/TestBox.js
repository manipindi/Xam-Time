import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';

function TestBox(props) {
    const [testData, setTestData] = useState(props.data);

    //         {
    //         testId: "Test12097",
    //         title: "E3 Sem1 Mathematics", 
    //         desc: "With supporting text below as a natural lead-in to additional content.",
    //         testMaker: "prof@test.com",
    //         duration: '2hrs',
    //         starttime: '12th Jan 8:00PM',
    // } );


    const navitem = {
        color: "white",
        fontWeight: "bold",
        padding: "15px 15px",
    };

    return (
        <div>
            <Card
                className='testbox mt-4'
            >
                {/* <Card.Header style={{backgroundColor: '#9dffb7'}}>
                    <Row>
                        <Col xs={8}>
                            <h5 style={{marginTop: '10px'}}>{testData.title}</h5>
                        </Col>
                        <Col xs={4} className="testbox-header">
                            <p className="testid">{testData.testId}</p>
                        </Col>
                    </Row>
                </Card.Header> */}
                <Card.Body className='bg-own shadow-lg'>
                    <Row>
                        <Col xs={8}>
                            <h5 style={{ marginTop: '10px' }} className='text-success'>{testData.title}</h5>
                        </Col>
                        <Col xs={4} className="testbox-header">
                            <p className="testid">{testData.testId}</p>
                        </Col>
                    </Row>
                    {/* <Card.Title>Special title treatment</Card.Title> */}
                    <Card.Text style={{ marginBottom: '8px' }}>
                        {/* {testData.description}
                        <br /> */}
                        {/* <b style={{ fontWeight: 500 }}>Test Maker:</b> {testData.testMaker} */}
                    </Card.Text>
                    <Card.Text style={{ marginBottom: '0px' }}>
                        <b style={{ fontWeight: 500 }}>Duration:</b> {testData.duration} &nbsp; &nbsp; &nbsp; &nbsp;
                        <b style={{ fontWeight: 500 }}>Start time:</b> {testData.startDateTime}
                    </Card.Text>

                    <Row>
                        {/* <Col md={4} className="created-time">
                            <p>Created on 12 Jan 2021 By Bhargav Imandi</p>
                        </Col> */}
                        <Col md={12} style={{ textAlign: 'right' }} className='mt-3'>
                            {/* <Button variant="outline-secondary">Live <i className="fa fa-play-circle-o" aria-hidden="true"></i></Button> &nbsp;&nbsp; */}
                            <Button variant="outline-secondary">Preview <i className="fa fa-eye" aria-hidden="true"></i></Button> &nbsp;&nbsp;
                            <Button variant="outline-success">Open &nbsp;<i className="fa fa-external-link" aria-hidden="true"></i> </Button>
                        </Col>
                    </Row>

                </Card.Body>
                {/* <Card.Footer style={{backgroundColor: 'white'}}>
                    <Row> 
                        {/* <Col md={4} className="created-time">
                            <p>Created on 12 Jan 2021 By Bhargav Imandi</p>
                        </Col> */}
                {/* <Col md={12} style={{textAlign: 'right'}}>
                            <Button variant="outline-secondary">Live <i className="fa fa-play-circle-o" aria-hidden="true"></i></Button> &nbsp;&nbsp;
                            <Button variant="outline-secondary">Preview <i className="fa fa-eye" aria-hidden="true"></i></Button> &nbsp;&nbsp;
                            <Button variant="info">Open &nbsp;<i className="fa fa-external-link" aria-hidden="true"></i> </Button>
                        </Col>
                    </Row>
                </Card.Footer> /*/}
            </Card>
        </div>

    );
}

export default TestBox;