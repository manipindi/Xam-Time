import {Row, Col, Form, Button, ButtonGroup, ToggleButton, InputGroup, FormControl, } from 'react-bootstrap';
import React, { useState } from 'react';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import QuestionsList from '../components/QuestionsList';
import { useSelector, useDispatch } from 'react-redux';
import { createQuestion } from './../store/reducers/questionsSlice';


function AddQuestions(props) {

    const questionsState = useSelector((state) => state.questionsReducer);
    const dispatch = useDispatch();

    const questionsList = questionsState.sections.find((section) => section.sectionId === props.sectionId).questions;

    const modules =  {
        toolbar: [
            [{ 'header': [false] }],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{ 'script': 'sub'}, { 'script': 'super' }], 
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
            ['clean']
        ],
      }
    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'script', 'sub', 'super',
        'list', 'bullet', 'indent',
        'link', 'image'
      ]
    
    const optionsModules = {
        toolbar: [
            ['bold', 'italic', 'underline'],
            [{ 'script': 'sub'}, { 'script': 'super' }], 
            [],
            ['link', 'image'],
            ['clean']
        ]
    }
    const optionsFormats = [
        'bold', 'italic', 'underline',
        'script', 'sub', 'super',
        'link', 'image'
      ]

    const [questionText, setQuestionText] = useState("");
    const [maxMarks, setMaxMarks] = useState(1);
    const [editQuestion, setEditQuestion] = useState(false);
    const [shuffleOptions, setShuffleOptions] = useState(true);
    

    const [ options, setOptions ] = useState( [ 
        {id:1, right: "true", value:""}, 
        {id:2, right: "false", value:""}, 
        {id:3, right: "false", value:""}, 
        {id:4, right: "false", value:""}, 

    ] );
    const [inputAns, setInputAns] = useState( "" );

    const [qTypeValue, setQTypeValue] = useState('1');
    const questionTypes = [
        { name: 'MCQ', value: '1' },
        { name: 'MAQ', value: '2' },
        { name: 'Input', value: '3' },
        { name: 'Essay', value: '4' },
        { name: 'File', value: '5' },
    ];

    const typeIcons = ["dot-circle-o", "check-square", "text-width", "align-justify", "file-text"];

    const handleOptions = (index, value) => {
        const tempOptions = [...options];
        tempOptions[index-1]['value'] = value;
        setOptions([...tempOptions]);
        //console.log(value);
    }
    const handleQuestion = (value) => {
        setQuestionText(value);
        //console.log(value);
    }
    const handleMCQAnswers = (index) => {
        const tempOptions = [...options];

        for(var i=0; i<tempOptions.length; i++){
            tempOptions[i]['right'] = "false";
        }
        tempOptions[index-1]['right'] = "true";
        
        setOptions([...tempOptions]);
    }
    const handleMSQAnswers = (index) => {
        const tempOptions = [...options];

        if(tempOptions[index-1]['right'] == "true"){
            tempOptions[index-1]['right'] = "false";
        }
        else{
            tempOptions[index-1]['right'] = "true";
        }
        
        
        setOptions([...tempOptions]);
    }

    const addOption = () => {
        let n = options.length + 1 ;
        const tempOptions = [...options, {id:n, right: "false", value: ""} ];
        
        setOptions([...tempOptions]);
    }
    
    function optionRemove(e, index){
       
        var tempOptions = [...options];
        tempOptions.splice(index-1, 1);
        for (var i=0; i<tempOptions.length; i++){
            tempOptions[i].id = i+1;
        }
        console.log(tempOptions);
        setOptions([...tempOptions]);
    }

    const handleColorChange = (value) => {
        if(value == "true")
            return "rgba(100,255,100,0.4)";
        else
            return "#ffffff";
    }

    const saveQuestion = () => {
        const questionData = {
            questionType: qTypeValue,
            questionText: questionText,
            maxMarks: maxMarks,
            shuffleOptions: shuffleOptions,
            options: options,
        }

        console.log("Question saved");
        dispatch( createQuestion(questionData) );
        setEditQuestion(false);

        setQTypeValue(1);
        setQuestionText("");
        setMaxMarks(1);
        setShuffleOptions(false);
        setOptions([
            {id:1, right: "true", value:""}, 
            {id:2, right: "false", value:""}, 
            {id:3, right: "false", value:""}, 
            {id:4, right: "false", value:""}, 
        ]);
    }

    const onSelectQuestion = (questionId) => {
        setEditQuestion(true);
        handleQuestion(questionId);
    }



    return (
        <div>
            <Row>
                <Col md={3}>
                    <h6>Questions - {props.sectionId}</h6>

                    <QuestionsList questionsList={questionsList} onSelectQuestion={onSelectQuestion}/>
                </Col>
                <Col md={9}>
                    <div style={{display: editQuestion?'none':'block'}}>
                        <h6>Create/Add questions</h6>
                        <div>
                            <Row>
                                <Col xs={12} sm={6} >
                                    <Button 
                                        variant="outline-primary" 
                                        style={{display: 'block', width: '100%'}}
                                        onClick={(e) => {setEditQuestion(true)}}
                                        className="mb-2"
                                    > 
                                    New question &nbsp;<i className='fa fa-plus' aria-hidden="true"></i>
                                    </Button>
                                    
                                </Col>
                                <Col xs={12} sm={6}>
                                    <InputGroup className="mb-2">
                                        <FormControl
                                        placeholder="Question ID"
                                        aria-label="Question ID"
                                        aria-describedby="basic-addon2"
                                        />
                                        <Button 
                                            variant="secondary" 
                                            id="button-addon2"
                                            onClick={(e) => {setEditQuestion(true)}}
                                        >
                                        Clone
                                        </Button>
                                    </InputGroup>
                                </Col> 
                            </Row>
                        </div>
                    </div>
                
                    <div  style={{display: editQuestion?'block':'none'}}>
                        <h6>Question Type</h6>
                        <div className='gutter-space'>
                            <Row>

                                <Form.Group as={Col} controlId="formGridState">
                                    {/* <Form.Label>Question Type</Form.Label><br/> */}
                                    <ButtonGroup style={{width: "100%"}}>
                                        {questionTypes.map((type, idx) => (
                                            <ToggleButton
                                                key={idx}
                                                id={`radio-${idx}`}
                                                type="radio"
                                                variant={'outline-primary'}
                                                name="radio"
                                                value={type.value}
                                                checked={qTypeValue === type.value}
                                                active={qTypeValue === type.value}
                                                onChange={(e) => setQTypeValue(e.target.value)}
                                            >
                                                <i className={"fa fa-"+typeIcons[idx]}></i> {'  '} {type.name} 
                                            </ToggleButton>
                                        ))}
                                    </ButtonGroup>
                                </Form.Group>
                            </Row>
                            <Row className="gutter-space">                                                                            
                                <Col md={6} >

                                    <Form.Group controlId="formGridEdit" style={{paddingTop: '8px'}}>
                                        <Form.Check 
                                            onChange={e => setShuffleOptions(!shuffleOptions)}
                                            checked={shuffleOptions}
                                            type="checkbox"
                                            id="custom-switch"
                                            label="Shuffle Options (if MCQ/MSQ)"
                                        />
                                    </Form.Group>
                                </Col>

                                <Col md={6}>
                                    <Form.Control placeholder="Max Marks" type="number" onChange={(e) => setMaxMarks(e.target.value)} value={maxMarks}/>
                                </Col>
                                            
                            </Row>
                        </div>


                        <div className='gutter-space'>
                            <h6>Question</h6>

                            <ReactQuill
                                theme='snow'
                                value={questionText}
                                onChange={e => handleQuestion(e)}
                                modules={modules}
                                formats={formats}
                                placeholder={"Enter question.."}
                                className="questionInput"
                            />
                        </div>

                        <div className='gutter-space'>
                            {qTypeValue == 1 && 
                                <div>
                                    <p style={{marginBottom: '5px', fontSize: '15px'}}>Enter options and select the right answer</p>
                                    {options.map((option, idx) => (
                                        <Row style={{padding: "10px 11px 0px 11px"}} key={idx}>
                                            <Col xs={1} className="optionsButton" 
                                                style={ 
                                                    {backgroundColor: handleColorChange(option.right)}
                                                }
                                                onClick={e => handleMCQAnswers(option.id)}
                                            > 
                                                <p>{String.fromCharCode(64+option.id) }</p>
                                                
                                            </Col>

                                            <Col xs={11} style={{padding: "0px"}}>
                                                <Form key={option.id}>
                                                    <ReactQuill
                                                        theme='snow'
                                                        value={option.value}
                                                        onChange={e => handleOptions(option.id, e)}
                                                        modules={optionsModules}
                                                        formats={optionsFormats}
                                                        placeholder={"Enter options.."}
                                                        className="optionInput"
                                                        key={options.id}
                                                    />
                                                </Form>
                                                
                                            </Col>
                                            <div style={{textAlign: "right", padding: '0px', marginTop: '-5px'}}>
                                                <span className="optionRemove" onClick={e => optionRemove(e, option.id)}>Remove</span>
                                            </div>
                                        </Row>
                                    ))}
                                    <Button onClick={addOption}>Add option</Button>
                                </div>
                            }
                            {qTypeValue == 2 && 
                                <div>
                                    <p style={{marginBottom: '5px', fontSize: '15px'}}>Enter options and select the right answers</p>

                                    {options.map((option, idx) => (
                                        <Row style={{padding: "10px 11px 0px 11px"}} key={idx}>
                                            <Col xs={1} className="optionsButton" 
                                                style={ 
                                                    {backgroundColor: handleColorChange(option.right)}
                                                }
                                                onClick={e => handleMSQAnswers(option.id)}
                                            > 
                                                <p>{String.fromCharCode(64+option.id) }</p>
                                                
                                            </Col>

                                            <Col xs={11} style={{padding: "0px"}}>
                                                <ReactQuill
                                                    theme='snow'
                                                    value={option.value}
                                                    onChange={e => handleOptions(option.id, e)}
                                                    modules={optionsModules}
                                                    formats={optionsFormats}
                                                    placeholder={"Enter options.."}
                                                    className="optionInput"
                                                />
                                                
                                            </Col>
                                            <div style={{textAlign: "right", padding: '0px'}}>
                                                <span className="optionRemove" onClick={e => optionRemove(e, option.id)}>Remove</span>
                                            </div>
                                            
                                        </Row>
                                    ))}
                                    <Button onClick={addOption}>Add option</Button>
                                </div>
                            }
                            {qTypeValue == 3 && 
                                <div>
                                    <p style={{marginBottom: '5px', fontSize: '15px'}}>Enter correct answer</p>

                                    <Form.Group className="mb-3" controlId="formGridAddress1">
                                        <Form.Control placeholder="This answer will be used for automatic evaluation" 
                                            onChange={ e => setInputAns(e.target.value) } 
                                            value={inputAns}
                                        />
                                    </Form.Group>
                                </div>
                            }
                            {qTypeValue == 4 && 
                                <div>
                                    <p style={{marginBottom: '5px', fontSize: '15px'}}>Essay</p>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" rows={3} 
                                            placeholder="Students will write their answers..."
                                            disabled={true}
                                            rows={6}
                                        />
                                    </Form.Group>
                                </div>
                            }
                            {qTypeValue == 5 && 
                                <div>
                                    <p style={{marginBottom: '5px', fontSize: '15px'}}>File Upload</p>
                                    <Button variant="outline-secondary" disabled style={{display: 'block', width: '100%'}}>
                                        <i className="fa fa-file"></i>&nbsp;&nbsp;
                                        Upload file
                                    </Button>
                                </div>
                            }
                        </div>

                        <div className='gutter-space'>
                            <Row>
                                <Col>
                                    <Button 
                                        variant="outline-danger" 
                                        style={{display: 'block', width: '100%'}}
                                        onClick={(e) => {saveQuestion()}}
                                    > 
                                    Discard question &nbsp;
                                    <i className='fa fa-trash'></i>
                                    </Button>
                                    
                                </Col>
                                <Col>
                                    <Button 
                                        variant="success" 
                                        style={{display: 'block', width: '100%'}}
                                        onClick={(e) => {saveQuestion()}}
                                    > 
                                    Save question &nbsp;
                                    <i className='fa fa-check'></i>
                                    </Button>
                                </Col> 
                            </Row>
                        </div>

                    </div>

                    
                </Col>
                
            </Row>
        </div>
    );
}

export default AddQuestions;