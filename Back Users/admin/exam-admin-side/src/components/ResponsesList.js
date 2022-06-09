import { Button, Table } from 'react-bootstrap';
import React, { useState } from 'react';
import { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import DataTable from './DataTable';
import { useSelector } from 'react-redux';
import responsesSlice from '../store/reducers/responsesSlice';

function ResponsesList() {
    const responsesState = useSelector((state) => state.responsesReducer).repsonsesAll;

    // Coping to new variable in such a way to make the redux state mutable. Else cannot add new attributes for table data
    const responses = responsesState.map((res) => 
        Object.assign({}, res)
    )
    console.log(responses);

    for(var i=0; i<responses.length; i++){
        responses[i].id = i+1+'';
        responses[i].open = 
            <Button as={NavLink} to={"/response"} size="sm" style={{minWidth: "30px"}} className="tableSmallButton">
                <span>Open &nbsp;&nbsp;<i className='fa fa-caret-right' aria-hidden="true"></i></span>
            </Button>;
        responses[i].details = 
            <NavLink to={"/response/details"} className="tableLink">
                View
            </NavLink>;
        responses[i].testtimePhotos = 
            <NavLink to={"/response/photos"} className="tableLink">
                Show
            </NavLink>;
            
        // to style the status values inside table, but sort is not working
        // switch(responses[i].evalStatus){
        //     case 'Completed':
        //         responses[i].evalStatus = 
        //             <Button variant="outline-success" className='tableStatusButton' disabled>
        //                 {responses[i].evalStatus}
        //             </Button>;
        //         break;
        //     case 'Pending':
        //         responses[i].evalStatus = 
        //             <Button variant="outline-secondary" className='tableStatusButton' disabled>
        //                 {responses[i].evalStatus + '...'}
        //             </Button>;
        //         break;
        // }
        
    }

    const columns = useMemo(
        () => [
            {
            Header: 'S.No',
            accessor: 'id'
            },
            {
            Header: 'Response ID',
            accessor: 'responseID',
            },
            {
            Header: 'Student ID',
            accessor: 'studentID',
            },
            {
            Header: 'Submited at',
            accessor: 'submitTime',
            },
            {
            Header: 'Status',
            accessor: 'evalStatus',
            },
            {
            Header: 'Marks',
            accessor: 'marksScored',
            },
            {
            Header: 'Details',
            accessor: 'details',
            },
            {
            Header: 'Photos',
            accessor: 'testtimePhotos',
            },
            {
            Header: 'Open',
            accessor: 'open',
            },
        ],
        []
    )
    // const data = useMemo(() => makeData(200), []);

    return (
        <div>
            <h6>Responses</h6>
            <DataTable columns={columns} data={responses}/>
        </div>
    );
}

export default ResponsesList;