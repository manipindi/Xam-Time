import { Col, Container, Row, Table, Tab, Tabs, Accordion, Card, useAccordionButton } from "react-bootstrap";
import { useEffect, useState } from "react";
import ResponseEvaluation from "../components/ResponseEvaluation";

function CustomToggle({ children, eventKey }) {
    const [open, setOpen] = useState(true);

    const decoratedOnClick = useAccordionButton(eventKey, () => {
        console.log('totally custom!');
        setOpen(!open);
    });
  
    return (
      <p
        type="button"
        style={{ marginBottom: "0px" }}
        onClick={decoratedOnClick}
      >
        {children} {open ? <i className="fa fa-caret-right fa-fw" aria-hidden="true"></i> : <i className="fa fa-caret-down fa-fw" aria-hidden="true"></i> }
      </p>
    );
}

function Response(){
    useEffect(() => {
        document.title = `Response`;
      }, []);


    return(
        <div className="tests-page">
            <Container>
                <h4>Response</h4>
                <hr/>
                <Accordion defaultActiveKey="0" style={{marginBottom: "10px"}}>
                    <Card>
                        <Card.Header>
                            <CustomToggle eventKey="0">Details</CustomToggle>
                        </Card.Header>


                        <Accordion.Collapse eventKey="0">
                            <Table bordered responsive className="responseDetails" style={{marginBottom: "0px", whiteSpace: "nowrap",}}>
                                <tbody>
                                    <tr>
                                        <td>N160108</td>
                                        <td>MANIKANTA PINDI</td>
                                        <td>manikantapindi9087@gmail.com</td>
                                        <td>E4 CSE</td>
                                    </tr>
                                    <tr>
                                        <td><strong>TestID:</strong> T1280</td>
                                        <td>E2 SEM2 - DATA MINING</td>
                                        <td><strong>Duration Spent:</strong> 1hr 50min</td>
                                        <td><strong>Submited at:</strong> 12 Jan 2022, 10:35PM</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Sections</strong>: 3</td>
                                        <td><strong>Total Attempted Questions:</strong> 24/30</td>
                                        <td><strong>Evaluation:</strong> 20/30</td>
                                        <td><strong>Marks Scored:</strong> 76/100</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Accordion.Collapse>
                    </Card>
                    
                </Accordion>

                

                <Tabs defaultActiveKey="section1" id="sectionsResponses" className="mb-3">
                    <Tab eventKey="section1" title="Multiple Choice Questions">
                        <ResponseEvaluation />
                    </Tab>
                    <Tab eventKey="section2" title="Descriptive">
                        <ResponseEvaluation />
                    </Tab>
                    {/* <Tab eventKey="section3" title="Verbal Ability">
                        <ResponseEvaluation />
                    </Tab> */}
                </Tabs>
            </Container>
        </div>
    )
}

export default Response;