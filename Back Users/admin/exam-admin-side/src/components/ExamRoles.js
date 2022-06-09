import { Card, Button, ButtonGroup, InputGroup, FormControl, Row, Col, Form} from 'react-bootstrap';
import DataTable from './DataTable';
import { useMemo } from 'react';
import makeData from './makeData';

function ExamRoles(props) {
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
            Header: 'Status',
            accessor: 'status',
            },
            {
            Header: 'Profile Progress',
            accessor: 'progress',
            },
        ],
        []
    )
    const data = useMemo(() => makeData(200), []);

    return (
        <div className='people-table'>
            <Card>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    
                    <div>
                    <DataTable data = {data} columns={columns}/>
                    </div>
                        
                    {/* <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
            </Card>
        </div>
    );
}

export default ExamRoles;