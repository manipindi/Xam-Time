import { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import {useDispatch} from "react-redux";
import { login } from "./../store/reducers/authSlice";

function Login() {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");

    const dispatch = useDispatch();

    return(
        <Container style={{paddingTop: "20px"}}>
            <h4>Login</h4>
            <hr />
            <Row>
                <Col md={6} xs={12}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" 
                                value={pwd}
                                onChange={(e) => setPwd(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Button variant="primary" 
                            onClick={() => dispatch(login({email, pwd}) )}
                        >
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;