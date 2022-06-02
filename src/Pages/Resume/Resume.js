
import React from 'react';
import { Nav, Navbar, Button, Container, NavDropdown, Offcanvas } from 'react-bootstrap';
import './Resume.css'
const Resume = () => {
    return (
        <div id='resume' className='resume'>

            <div className='heading'>
                <p>3+ YEARS OF EXPERIENCE</p>
            </div>
            <div className='heading'>
                <h1>My Resume</h1>
            </div>
            <Navbar collapseOnSelect expand="lg" className='Navbar' >
                <Container>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Navbar.Offcanvas
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                            placement="end" 
                        >
                            <Offcanvas.Header closeButton >
                                <Offcanvas.Title id="offcanvasNavbarLabel">
                                    Shakib Hasan
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className='offcanvas-body'>
                                <Nav className="justify-content-center flex-grow-1 ">

                                    <div className='wrap5'>
                                        <div className='box5 four5'>
                                            <Nav.Link href="/education" className='navLink' active>Education</Nav.Link>
                                        </div>
                                    </div>
                                    <div className='wrap6'>
                                        <div className='box6 four6'>
                                            <Nav.Link href="/skills" className='navLink' active>Professional Skills</Nav.Link>
                                        </div>
                                    </div>
                                    <div className='wrap6'>
                                        <div className='box6 four6'>
                                            <Nav.Link href="/experience" className='navLink' active>Experience</Nav.Link>
                                        </div>
                                    </div>
                                    <div className='wrap6'>
                                        <div className='box6 four6'>
                                            <Nav.Link href="/interview" className='navLink' active>Interview</Nav.Link>
                                        </div>
                                    </div>
                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

           
        </div>
    );
};

export default Resume;