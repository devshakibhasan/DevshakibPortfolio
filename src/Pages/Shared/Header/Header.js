import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Offcanvas, Form, Button, FormControl } from 'react-bootstrap';
import './Header.css'
const Header = () => {
 
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className='Navbar' fixed="top">
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
                                    <div className='wrap7'>
                                        <div className='box7 four7'>
                                            <Nav.Link href="/" className='navLink'  >HOME</Nav.Link>
                                        </div>
                                    </div>
                                    <div className='wrap7'>
                                        <div className='box7 four7'>
                                            <Nav.Link href="#Feature" className='navLink'  >FEATURES</Nav.Link>
                                        </div>
                                    </div>
                                    <div className='wrap7'>
                                        <div className='box7 four7'>
                                            <Nav.Link href="#portfolio" className='navLink'  >PORTFOLIO</Nav.Link>
                                        </div>
                                    </div>
                                    <div className='wrap7'>
                                        <div className='box7 four7'>
                                            <Nav.Link href="#resume" className='navLink'  >RESUME</Nav.Link>
                                        </div>
                                    </div>
                                    <div className='wrap7'>
                                        <div className='box7 four7'>
                                            <Nav.Link href="#Clients" className='navLink'  >CLIENTS</Nav.Link>
                                        </div>
                                    </div>
                                   
                                    <div className='wrap7'>
                                        <div className='box7 four7'>
                                            <Nav.Link href="#Blogs" className='navLink'  >BLOG</Nav.Link>
                                        </div>
                                    </div>
                                    <div className='wrap7'>
                                        <div className='box7 four7 contact'>
                                            <Nav.Link href="#Contact" className='navLink'  >CONTACT</Nav.Link>
                                        </div>
                                    </div>
                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;