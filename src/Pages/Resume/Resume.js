
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
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id="offcanvasNavbarLabel">
                                    Shakib Hasan
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-center flex-grow-1 ">

                                    <div className='wrap5'>
                                        <div className='box5 four5'>
                                            <Nav.Link href="/" className='navLink' active>Education</Nav.Link>
                                        </div>
                                    </div>
                                    <div className='wrap6'>
                                        <div className='box6 four6'>
                                            <Nav.Link href="/" className='navLink' active>Professional Skills</Nav.Link>
                                        </div>
                                    </div>
                                    <div className='wrap6'>
                                        <div className='box6 four6'>
                                            <Nav.Link href="/" className='navLink' active>Experience</Nav.Link>
                                        </div>
                                    </div>
                                    <div className='wrap6'>
                                        <div className='box6 four6'>
                                            <Nav.Link href="/" className='navLink' active>Interview</Nav.Link>
                                        </div>
                                    </div>
                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* <Navbar collapseOnSelect expand="lg" className='Navbar' >
                        <Container >
                            <Navbar.Brand href="/" className='Logo'>Shakib</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Navbar.Offcanvas
                                    id="offcanvasNavbar"
                                    aria-labelledby="offcanvasNavbarLabel"
                                    placement="start"
                                >
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title id="offcanvasNavbarLabel">
                                            Shakib Hasan
                                        </Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <Nav className="justify-content-end flex-grow-1 ">
                                            <Nav.Link href="/" className='navLink' active>HOME</Nav.Link>
                                            <Nav.Link href="#Feature" className='navLink'>FEATURES</Nav.Link>
                                            <Nav.Link href="#portfolio" className='navLink'>PORTFOLIO</Nav.Link>
                                            <Nav.Link href="#resume" className='navLink'>RESUME</Nav.Link>
                                            <Nav.Link href="#" className='navLink'>CLIENTS</Nav.Link>
                                            <Nav.Link href="#" className='navLink'>PRICING</Nav.Link>
                                            <Nav.Link href="#" className='navLink'>BLOG</Nav.Link>
                                            <Nav.Link href="#" className='navLink'>CONTACT</Nav.Link>
                                        </Nav>

                                    </Offcanvas.Body>
                                </Navbar.Offcanvas>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
           */}

        </div>
    );
};

export default Resume;