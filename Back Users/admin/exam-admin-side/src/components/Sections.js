import {Accordion, Row, Col, Form, Button} from 'react-bootstrap';
import { DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
import { useState } from 'react';
import AddQuestions from './AddQuestions';
import { useDispatch, useSelector } from 'react-redux';
import { addSection, deleteSection, updateSectionDetails, reorderSections } from './../store/reducers/questionsSlice';


function Sections() {
    const questionsState = useSelector((state) => state.questionsReducer);
    const dispatch = useDispatch();
    
    const sections = questionsState.sections;
    const setSections = () => {
        return null;
    }

    const saveSection = (e, index) => {
        e.preventDefault();
        const sectionDetails = {
            index: index,
            sectionName: e.target.sectionName.value,
            duration: e.target.duration.value,
            shuffleOptions: e.target.shuffleOptions.checked,
            shuffleQuestions: e.target.shuffleQuestions.checked,
        }
        dispatch( updateSectionDetails(sectionDetails) );
        console.log(sectionDetails);
    }

    const grid = 1;
    const getItemStyle = (isDragging, draggableStyle) => ({
        // some basic styles to make the items look a bit nicer
        userSelect: "none",
        paddingTop: grid * 2,
        paddingBottom: grid * 2,
        borderRadius: "5px",

        // change background colour if dragging
        background: isDragging ? "#e7f1ff" : "white",

        // styles we need to apply on draggables
        ...draggableStyle
    });

    const getListStyle = isDraggingOver => ({
        // background: isDraggingOver ? "lightgrey" : "none",
        paddingTop: grid,
        paddingBottom: grid,
    });

    // a little function to help us with reordering the result
    // const reorder = (list, startIndex, endIndex) => {
    //     const result = Array.from(list);
    //     const [removed] = result.splice(startIndex, 1);
    //     result.splice(endIndex, 0, removed);

    //     return result;
    // };
    // const onDragEnd = (result) => {
    //     // dropped outside the list
    //     if (!result.destination) {
    //       return;
    //     }
    
    //     const items = reorder(
    //       sections,
    //       result.source.index,
    //       result.destination.index
    //     );
    
    //     dispatch( reorderSections(items) );
        
    //   }

    return(
        <div>
            <DragDropContext onDragEnd={(result) => dispatch( reorderSections({result: result}) )}>
                <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                    >
                    {
                        sections.map((section, index) => (
                            <Draggable key={index} draggableId={section.order} index={index}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    style={getItemStyle(
                                        snapshot.isDragging,
                                        provided.draggableProps.style
                                    )}
                                    
                                >
                                    <div 
                                        {...provided.dragHandleProps}
                                        style={{textAlign: 'center', color: "gray", backgroundColor: "#eee", borderRadius: '5px 5px 0px 0px', marginBottom: '-5px', cursor: 'pointer'}}>
                                        <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                                    </div>
                                    <Accordion key={index} style={{marginBottom: '8px'}}>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                {section.sectionName + " - Questions"}
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <AddQuestions sectionId={section.sectionId}/>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                Section - Controls</Accordion.Header>
                                            <Accordion.Body>
                                                <Form onSubmit={(e) => saveSection(e, index)} key={section.sectionId}>
                                                    <Row>
                                                        <Form.Group className="mb-2" as={Col} sm={12} md={6} controlId="sectionName">
                                                            <Form.Label>Section Title</Form.Label>
                                                            <Form.Control type="text" name="sectionName" placeholder="Title" defaultValue={section.sectionName} onChange={() => {}}/>
                                                        </Form.Group>
                                                        <Form.Group className="mb-2" as={Col} sm={12} md={6} controlId="duration">
                                                            <Form.Label>Duration</Form.Label>
                                                            <Form.Control type="number" name="duration" placeholder="In minutes" defaultValue={section.duration} />
                                                        </Form.Group>
                                                        <Form.Group className="mb-2" as={Col} xs={12} sm={6} controlId="shuffleQuestions">
                                                            <Form.Check 
                                                                type="checkbox"
                                                                name="shuffleQuestions"
                                                                id="shuffleQuestions"
                                                                label="Shuffle Questions"
                                                                defaultChecked={section.shuffleQuestions}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-2" as={Col} xs={12} sm={6} controlId="shuffleOptions">
                                                            <Form.Check 
                                                                type="checkbox"
                                                                name="shuffleOptions"
                                                                id="shuffleOptions"
                                                                label="Shuffle Options"
                                                                defaultChecked={section.shuffleOptions}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-2" as={Col} xs={6} controlId="exampleForm.ControlInput1" >
                                                            <Button 
                                                                variant="outline-danger"
                                                                size="sm" 
                                                                onClick={(e) => dispatch( deleteSection({index: index}) )}
                                                                style={{width: "100%"}}
                                                            >
                                                                Delete section <i className='fa fa-trash'></i>
                                                            </Button>
                                                        </Form.Group>

                                                        <Form.Group className="mb-2" as={Col} xs={6} controlId="exampleForm.ControlInput1" >
                                                            <Button 
                                                                variant="success"
                                                                size="sm" 
                                                                style={{width: "100%"}}
                                                                type="submit"
                                                            >
                                                                Save Changes <i className='fa fa-check'></i>
                                                            </Button>
                                                        </Form.Group>
                                                    </Row>
                                                </Form>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            )}
                            </Draggable>
                        ))
                    }
                    {provided.placeholder}
                    </div>
                )}
                    
                </Droppable>
            </DragDropContext>
            <Row>
                <Col>
                    <Button variant="outline-primary"
                        onClick={() => dispatch( addSection() )}
                    >
                        Add section <i className='fa fa-plus'></i>
                    </Button>
                </Col>
            </Row>
            
            
        </div>
    )
}

export default Sections;