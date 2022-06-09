import { Row, Col, Table, Accordion, useAccordionButton, Card} from "react-bootstrap";
import { useState } from "react";

function CustomToggle({ children, eventKey }) {
    const [open, setOpen] = useState(false);

    const decoratedOnClick = useAccordionButton(eventKey, () => {
        console.log('totally custom!');
        setOpen(!open);
    });
  
    return (
      <p
        type="button"
        style={{}}
        onClick={decoratedOnClick}
        className="mb-0"
      >
        {children} {open ? <i className="fa fa-caret-right fa-fw" aria-hidden="true"></i> : <i className="fa fa-caret-down fa-fw" aria-hidden="true"></i> }
      </p>
    );
}

function ResponseEvaluation(){
    const questions = [
        {start: "Define Laws of La..", questionType: "MCQ", questionId: "Q1231"},
        {start: "Define Ohms La..", questionType: "MCQ", questionId: "Q1232"},
        {start: "Define Ohms La..", questionType: "MCQ", questionId: "Q1233"},
        {start: "Define Kirkoff's La..", questionType: "MCQ", questionId: "Q1234"},
        {start: "Define Rocket La..", questionType: "MCQ", questionId: "Q1235"},
        {start: "Define Ohms La..", questionType: "MCQ", questionId: "Q1236"},
        {start: "Define Invent La..", questionType: "MCQ", questionId: "Q1237"},
        {start: "Define Ohms La..", questionType: "MCQ", questionId: "Q1238"},
        {start: "Define Reflection La..", questionType: "MCQ", questionId: "Q1239"},
        {start: "Define Diffraction La..", questionType: "MCQ", questionId: "Q1240"},
        {start: "Define Light speed La..", questionType: "MCQ", questionId: "Q1241"},
        {start: "Define Hello La..", questionType: "MCQ", questionId: "Q1242"},
        {start: "Define Ohms La..", questionType: "MCQ", questionId: "Q1243"},
    ];

    const [currentQuestion, setCurrentQuestion] = useState( questions[0].questionId );

    const changeQuestion = (questionId) => {
        setCurrentQuestion(questionId);
    }

    const nextQuestion = (questionId) => {
        var currentIndex = 0;
        for(var i=0; i<questions.length; i++){
            if(questions[i].questionId === questionId){
                currentIndex = i;
                break;
            }
        }
        if(currentIndex < questions.length-1){
            setCurrentQuestion( questions[currentIndex+1].questionId );
        }
    }
    const prevQuestion = (questionId) => {
        var currentIndex = 0;
        for(var i=0; i<questions.length; i++){
            if(questions[i].questionId === questionId){
                currentIndex = i;
                break;
            }
        }
        if(currentIndex > 0){
            setCurrentQuestion( questions[currentIndex-1].questionId );
        }
    }
    return (
        <div>
            <Table bordered responsive className="responseDetails" style={{marginBottom: "0px",}}>
                <tbody>
                    <tr>
                        <td><strong>Questions:</strong>50</td>
                        <td><strong>Marks:</strong> 41/50</td>
                        <td>manikantapindi9087@gmail.com</td>
                        <td>E4 CSE</td>
                    </tr>
                </tbody>
            </Table>

            <Row style={{marginTop: "10px"}}>
                <Col xs={12} md={4}>
                    <div className="responseQuestions mb-3">
                        {
                            questions.map((question, idx) => (
                                <div className="responseQueCard" 
                                    key={idx}
                                    onClick={(e) => changeQuestion(question.questionId)}
                                    style={ question.questionId === currentQuestion ? {borderColor: "gray", backgroundColor: "#eee"} : {}}
                                >
                                    <p className="mb-0">
                                        <span className="queNumber">{idx+1}</span>
                                        <span className="queStart">{question.start}</span>
                                    </p>
                                    <span className="questionType">{question.questionType}</span>
                                </div>
                            ))
                        }
                        
                    </div>
                </Col>
                <Col xs={12} md={8}>
                    <div className="responseAnsHead">
                        <span style={{float: "left"}}>
                            <button style={{backgroundColor: "white", border: "1px solid #0d6efd", color:"#0d6efd", marginLeft: "0px"}} onClick={(e) => prevQuestion(currentQuestion)}>
                                <i className="fa fa-caret-left" aria-hidden="true"></i>&nbsp; Prev
                            </button>
                        </span>

                        <span style={{float: "right"}}>
                            <input defaultValue={2} style={{display: "inline", width:"50px"}} onChange={(e) => {}}/> /5
                            <button>Award</button>
                            <button style={{backgroundColor: "white", border: "1px solid #0d6efd", color:"#0d6efd"}} onClick={(e) => nextQuestion(currentQuestion)}>
                                Next &nbsp;<i className="fa fa-caret-right" aria-hidden="true"></i>
                            </button>
                        </span>
                        
                    </div>
                    <div className="responseAnswer mb-3 mt-1">
                        <Accordion defaultActiveKey="">
                            <Card>
                                <Card.Header className="text-success">
                                    <div>Question - {currentQuestion}</div>
                                </Card.Header>

                                {/* <Accordion.Collapse eventKey="0"> */}
                                    <div style={{padding: "8px 16px", }}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam velit vitae felis rutrum, nec facilisis mi blandit. Sed eleifend aliquam nisl, eget molestie leo gravida quis. Nullam interdum facilisis arcu eget ullamcorper. Proin et nibh quam. Sed vel ultrices massa. Nullam rhoncus eros at ullamcorper vulputate. Sed ut maximus neque. Aenean velit elit, consequat at tellus id, condimentum viverra augue.</p>
                                    </div>
                                {/* </Accordion.Collapse> */}
                                
                            </Card>
                        </Accordion>

                            <Card className="mt-1">
                                <Card.Header className="text-success">
                                    Response
                                </Card.Header>

                                {/* <Accordion.Collapse eventKey="0"> */}
                                    <div style={{padding: "8px 16px", }}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam velit vitae felis rutrum, nec facilisis mi blandit. Sed eleifend aliquam nisl, eget molestie leo gravida quis. Nullam interdum facilisis arcu eget ullamcorper. Proin et nibh quam. Sed vel ultrices massa. Nullam rhoncus eros at ullamcorper vulputate. Sed ut maximus neque. Aenean velit elit, consequat at tellus id, condimentum viverra augue.</p>
                                    </div>
                                {/* </Accordion.Collapse> */}
                                
                            </Card>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ResponseEvaluation;