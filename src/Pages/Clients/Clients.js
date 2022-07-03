
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../Shared/NotFound/NotFound';

import './Clients.css'
import ClientsNavbar from './ClientsNavbar/ClientsNavbar';
import { Nav, Navbar, Button, Container, NavDropdown, Offcanvas, Tabs, Tab, Row, Col } from 'react-bootstrap';

const Clients = () => {
    return (
        <div id='Clients' className='Clients'>

           
            <Container>
            <div className='clients-text'>
                <p>POPULAR CLIENTS</p>
            </div>
            <div className='clients-heading'>
                <h1>Awesome Clients</h1>
            </div>
                <Tab.Container id="left-tabs-example " defaultActiveKey="first" className='tabss'>
                    <Row className='rowss'>
                        <Col  lg='3' md='12' sm='12' xs='12'  className='varticle-navs d-flex justify-content-center'>
                            <Nav variant="pills" className="flex-column tabss">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" className='navss fist'>Javascript</Nav.Link>
                                </Nav.Item>
                                <Nav.Item >
                                    <Nav.Link eventKey="second" className='navss'>Product Design</Nav.Link>
                                </Nav.Item >
                                <Nav.Item >
                                    <Nav.Link eventKey="third" className='navss'>PSD To HTML</Nav.Link>
                                </Nav.Item >
                                <Nav.Item >
                                    <Nav.Link eventKey="fourth" className='navss'>React Js</Nav.Link>
                                </Nav.Item >
                                <Nav.Item >
                                    <Nav.Link eventKey="fifth" className='navss'>Full Stack</Nav.Link>
                                </Nav.Item >
                            </Nav>
                        </Col>
                        <Col lg='9' md='12' sm='12' xs='12' className='d-flex justify-content-center'>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row className='rowss'>
                                      
                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5'>
                                            <div class="wrap10">
                                                <div class="box10 four10">

                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img' />

                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5'  >
                                            <div class="wrap10">
                                                <div class="box10 four10">

                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img' />

                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5'>
                                            <div class="wrap10">
                                                <div class="box10 four10">

                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img' />

                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5'  >
                                            <div class="wrap10">
                                                <div class="box10 four10">

                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img' />

                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5'  >
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img   client-imgs'   />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5'  >
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5'  >
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5'  >
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/4WhRBf1/brand-01.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5'  >
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img   client-imgs'   />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row className='rowss'>
                                       
                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5'  >
                                            <div class="wrap10 boxs1">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img   client-imgs'   />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5'  >
                                            <div class="wrap10">
                                                <div class="box10 four10">

                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img' />

                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>

                                      
                                      
                                      
                                      
                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5'  >
                                            <div class="wrap10 ">
                                                <div class="box10 four10">

                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img' />

                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5'  >
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img   client-imgs'   />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5' >
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5' >
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5' >
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/4WhRBf1/brand-01.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row className='rowss'>
                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5' >
                                            <div class="wrap10 boxs1">
                                                <div class="box10 four10">

                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img' />

                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>

                                       
                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5' >
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img   client-imgs'   />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>


                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5' >
                                            <div class="wrap10">
                                                <div class="box10 four10">

                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img' />

                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5' >
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img   client-imgs'   />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5' >
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5' >
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5' >
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/4WhRBf1/brand-01.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img   client-imgs'   />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <Row className='rowss'>
                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5' >
                                            <div class="wrap10 boxs1">
                                                <div class="box10 four10">

                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img' />

                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>

                                      
                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5' >
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5' >
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5' >
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/4WhRBf1/brand-01.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5' >
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img   client-imgs'   />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <Row className='rowss'>
                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5' >
                                            <div class="wrap10 boxs1">
                                                <div class="box10 four10">

                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img' />

                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5' >
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img   client-imgs'   />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5' >
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5' >
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5' >
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/4WhRBf1/brand-01.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img   client-imgs'   />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5' >
                                            <div class="wrap10">
                                                <div class="box10 four10">

                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img' />

                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5' >
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img   client-imgs'   />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5' >
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5' >
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/4WhRBf1/brand-01.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg='4' md='4' sm='6' xs='6' xxs='5' >
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img   client-imgs'   />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </div>
    );
};

export default Clients;