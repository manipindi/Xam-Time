import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { reorderQuestions } from './../store/reducers/questionsSlice';



function QuestionsList(props) {
    const dispatch = useDispatch();

    const grid = 1;
    const getItemStyle = (isDragging, draggableStyle) => ({
        // some basic styles to make the items look a bit nicer
        userSelect: "none",
        padding: grid * 2,

        // change background colour if dragging
        background: isDragging ? "#e7f1ff" : "white",

        // styles we need to apply on draggables
        ...draggableStyle
    });

    const getListStyle = isDraggingOver => ({
        // background: isDraggingOver ? "lightgrey" : "none",
        padding: grid,
        // width: 250
    });

    return (
        <div>
            <DragDropContext onDragEnd={(result) => dispatch( reorderQuestions({result: result, sectionId: props.sectionId}) )}>
                <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                    >
                    {props.questionsList.map((question, index) => (
                        <Draggable key={question.order} draggableId={question.order} index={index}>
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={getItemStyle(
                                    snapshot.isDragging,
                                    provided.draggableProps.style
                                )}
                                
                            >
                                <div className='question' onClick={() => props.onSelectQuestion(question.questionId)}>
                                    <p className="que-id">{question.questionId}</p>
                                    <p className="que-head">{question.Start}</p> 
                                </div>
                            </div>    
                            
                        )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                    </div>
                )}
                </Droppable>
            </DragDropContext>

                        {/* <DragDropContext>
                            <Droppable>
                            {
                                questionIds.map((question) =>
                                    <div key={question.id}>
                                        <Question id={question.questionId} />
                                    </div>
                                )
                            }
                            </Droppable>
                        </DragDropContext> */}
        </div>
    );
}

export default QuestionsList;