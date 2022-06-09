import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NotFound() {

    return (
        <Container style={{paddingTop: "20px"}}>
            <h4>404 - Page not found</h4>
            <hr />
            <p>Please check the link</p>
            <Button as={Link} to="/">Go to Dashboard</Button>
        </Container>
    );
}

export default NotFound;