import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Offcanvas, Form, Button, FormControl } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'
const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

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
                                            <Nav.Link href="/" className='navLink'  active>HOME</Nav.Link>
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
                                            <Nav.Link href="/" className='navLink'  >CLIENTS</Nav.Link>
                                        </div>
                                    </div>
                                    <div className='wrap7'>
                                        <div className='box7 four7'>
                                            <Nav.Link href="/" className='navLink'  >PRICING</Nav.Link>
                                        </div>
                                    </div>
                                    <div className='wrap7'>
                                        <div className='box7 four7'>
                                            <Nav.Link href="/" className='navLink'  >BLOG</Nav.Link>
                                        </div>
                                    </div>
                                    <div className='wrap7'>
                                        <div className='box7 four7 contact'>
                                            <Nav.Link href="/" className='navLink'  >CONTACT</Nav.Link>
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