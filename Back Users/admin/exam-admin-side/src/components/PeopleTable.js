import { Card, Button, ButtonGroup, Modal, Row, Col, Form} from 'react-bootstrap';
import DataTable from './DataTable';
import { useState, useMemo } from 'react';
import makeData from './makeData';

function ActionModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.heading + " " + props.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h4>Centered Modal</h4> */}
          <Form.Control type="file" accept=".xlsx, .xls, .csv"/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>{props.heading}</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function PeopleTable(props) {
    const [modalShow, setModalShow] = useState(false);

    const openFileUpload = () => {
        document.getElementById("importpeoplefileupload").click();
    }

    const columns = useMemo(
        () => [
          {
            Header: 'First Name',
            accessor: 'firstName'
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
          {
            Header: 'Age',
            accessor: 'age',
          },
          {
            Header: 'Visits',
            accessor: 'visits',
          },
          {
            Header: 'Branch',
            accessor: 'status',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
          },
        ],
        []
    );

    const data = useMemo(() => makeData(200), []);
    console.log(data);

    return (
        <div className='people-table'>
            <Card>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <div>
                        <Row>
                            {/* <Col md={6} sm={12}>
                                <InputGroup className="mb-3">
                                    <FormControl
                                    placeholder="Search"
                                    aria-label="search"
                                    aria-describedby="basic-addon2"
                                    />
                                    <Button variant="outline-secondary" id="button-addon2">
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </Button>
                                </InputGroup>

                            </Col> */}
                            <Col sm={12}>
                                <Form.Group controlId="formGridState">
                                        {/* <Form.Label>Question Type</Form.Label><br/> */}
                                    <ButtonGroup style={{width: "20%"}}>
                                        {/* <Button variant="outline-secondary" >
                                            <i className="fa fa-table" aria-hidden="true"></i>&nbsp; Template 
                                        </Button> */}
                                        {/* <Button variant="outline-secondary" >
                                            <i className="fa fa-cloud-download" aria-hidden="true"></i>&nbsp; Download 
                                        </Button> */}
                                        <Button variant="outline-secondary" onClick={() => setModalShow(true)}>
                                            <i className="fa fa-cloud-upload" aria-hidden="true"></i>&nbsp; Import 
                                        </Button>
                                    </ButtonGroup>
                                    
                                    <ActionModal
                                        show={modalShow}
                                        heading="Import"
                                        name={props.name}
                                        onHide={() => setModalShow(false)}
                                    />
                                    
                                </Form.Group>
                                <br/>
                                <DataTable data={data} columns={columns}/>

                            </Col>
                        </Row>
                        
                    </div>
                    {/* <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text> */}
                    {/* <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
            </Card>
        </div>
    );
}

export default PeopleTable;