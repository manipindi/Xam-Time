import {Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from './../store/reducers/authSlice';

function AdminNavbar(props) {
    const dispatch = useDispatch();

    const navitem = {
        color: "white",
        fontWeight: "bold",
        // padding: "15px 0px",
    };

    return (
        <div className='admin-nav'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='fw-bolder p-2 border-bottom'>
                <Container fluid>
                    <Navbar.Brand as={Link} to="/" bg="light" variant="light" className='fw-bold fs-2 margin-l'>RGUKT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    {props.logStatus ?
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                            </Nav>
                            <Nav>
                                <Nav.Link className={(navData) => (navData.isActive ? 'active nav-link' : 'nav-link')} as={NavLink} style={{marginRight: "12px"}} to="/">Dashboard</Nav.Link>
                                <Nav.Link className={(navData) => (navData.isActive ? 'active nav-link' : 'nav-link')} as={NavLink} style={{marginRight: "12px"}} to="/people">Users</Nav.Link>
                                {/* <Nav.Link className={(navData) => (navData.isActive ? 'active nav-link' : 'nav-link')} as={NavLink} style={{marginRight: "12px"}} to="/tests">Tests</Nav.Link> */}
                                <Nav.Link className={(navData) => (navData.isActive ? 'active nav-link' : 'nav-link')} as={NavLink} style={{marginRight: "12px"}} to="/test">Test Deatils</Nav.Link>
                                <Nav.Link className={(navData) => (navData.isActive ? 'active nav-link' : 'nav-link')} as={NavLink} style={{marginRight: "12px"}} to="/response">Response</Nav.Link>
                                <Nav.Link className={(navData) => (navData.isActive ? 'active nav-link' : 'nav-link')} as={NavLink} style={{marginRight: "12px"}} to="/proctor">Logout</Nav.Link>

                                {/* <NavDropdown title="Account" id="collasible-nav-dropdown">
                                    <NavDropdown.Item to="/login" as={NavLink} >Login</NavDropdown.Item>
                                    
                                    <NavDropdown.Item to="/profile" as={NavLink}>Profile</NavDropdown.Item>
                                    <NavDropdown.Item to="/sm" as={NavLink}>Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item to="/login" as={NavLink} onClick={() => dispatch(logout())}>Logout</NavDropdown.Item>
                                </NavDropdown> */}
                                
                                
                            </Nav>
                        </Navbar.Collapse> :
                        <></>
                    }
                </Container>
            </Navbar>
        </div>
    );
  }
  
export default AdminNavbar;
  
 