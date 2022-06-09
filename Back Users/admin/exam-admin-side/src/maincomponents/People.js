import { Tab, Nav, Row, Col, Card, Container } from 'react-bootstrap';
import PeopleTable from '../components/PeopleTable';
import { useEffect } from 'react';

function People() {
    useEffect(() => {
        document.title = `People`;
    }, []);

    return (
        <div className="people">
            <Container>
                <h4>Users Details </h4>
                <hr />
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row style={{ textAlign: 'center' }} className="dash-stats mb-4">
                        <Col xs={6} md={3}>
                            <Card body>
                                <h3>6239</h3>
                                <p>students</p>
                            </Card>
                        </Col>
                        <Col xs={6} md={3}>
                            <Card body>
                                <h3>23</h3>
                                <p>test makers</p>
                            </Card>
                        </Col>
                        <Col xs={6} md={3}>
                            <Card body>
                                <h3>45</h3>
                                <p>tests</p>
                            </Card>
                        </Col>
                        <Col xs={6} md={3}>
                            <Card body>
                                <h3>34</h3>
                                <p>proctors</p>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first"><i className="fa fa-user-circle-o" aria-hidden="true"></i> &nbsp;Students</Nav.Link>
                                </Nav.Item>
                                {/* <Nav.Item>
                                    <Nav.Link eventKey="second"><i className="fa fa-users" aria-hidden="true"></i> &nbsp;Student Groups</Nav.Link>
                                </Nav.Item> */}
                                <Nav.Item>
                                    <Nav.Link eventKey="third"><i className="fa fa-book" aria-hidden="true"></i> &nbsp;Faculty</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth"><i className="fa fa-check-square-o" aria-hidden="true"></i> &nbsp;Admins</Nav.Link>
                                </Nav.Item>

                            </Nav>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <PeopleTable name={"Students"} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <PeopleTable name={"Groups"} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <PeopleTable name={"Faculty"} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <PeopleTable name={"Admins"} />
                                </Tab.Pane>

                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </div>
    );
}

export default People;