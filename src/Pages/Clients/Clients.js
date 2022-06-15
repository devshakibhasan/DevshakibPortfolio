
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../Shared/NotFound/NotFound';

import './Clients.css'
import ClientsNavbar from './ClientsNavbar/ClientsNavbar';
import { Nav, Navbar, Button, Container, NavDropdown, Offcanvas, Tabs, Tab, Row, Col } from 'react-bootstrap';

const Clients = () => {
    return (
        <div id='Clients' className='Clients'>

            <div className='heading'>
                <p>3+ YEARS OF EXPERIENCE</p>
            </div>
            <div className='heading'>
                <h1>My Clients</h1>
            </div>
            <Container>
                <Tab.Container id="left-tabs-example " defaultActiveKey="first" className='tabss'>
                    <Row className='rowss'>
                        <Col sm={2} lg={3}>
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
                        <Col sm={9} lg={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row className='rowss'>
                                        <Col>
                                            <div class="wrap10 boxs1">
                                                <div class="box10 four10">

                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img' />

                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col>
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/9VLh9JH/brand-03.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/tQJGSqG/brand-02.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/n7S0Czk/brand-04.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
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
                                                    <img src="https://i.ibb.co/9VLh9JH/brand-03.webp" alt="" className='client-img' />
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

                                        <Col>
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/9VLh9JH/brand-03.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/tQJGSqG/brand-02.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/n7S0Czk/brand-04.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
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
                                                    <img src="https://i.ibb.co/9VLh9JH/brand-03.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row className='rowss'>
                                        <Col>
                                            <div class="wrap10 boxs1">
                                                <div class="box10 four10">

                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img' />

                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col>
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/9VLh9JH/brand-03.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/tQJGSqG/brand-02.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/n7S0Czk/brand-04.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
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
                                                    <img src="https://i.ibb.co/9VLh9JH/brand-03.webp" alt="" className='client-img' />
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

                                        <Col>
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/9VLh9JH/brand-03.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/tQJGSqG/brand-02.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/n7S0Czk/brand-04.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
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
                                                    <img src="https://i.ibb.co/9VLh9JH/brand-03.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row className='rowss'>
                                        <Col>
                                            <div class="wrap10 boxs1">
                                                <div class="box10 four10">

                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img' />

                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col>
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/9VLh9JH/brand-03.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/tQJGSqG/brand-02.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/n7S0Czk/brand-04.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
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
                                                    <img src="https://i.ibb.co/9VLh9JH/brand-03.webp" alt="" className='client-img' />
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

                                        <Col>
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/9VLh9JH/brand-03.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/tQJGSqG/brand-02.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/n7S0Czk/brand-04.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
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
                                                    <img src="https://i.ibb.co/9VLh9JH/brand-03.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <Row className='rowss'>
                                        <Col>
                                            <div class="wrap10 boxs1">
                                                <div class="box10 four10">

                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img' />

                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col>
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/9VLh9JH/brand-03.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/tQJGSqG/brand-02.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/n7S0Czk/brand-04.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
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
                                                    <img src="https://i.ibb.co/9VLh9JH/brand-03.webp" alt="" className='client-img' />
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

                                        <Col>
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/9VLh9JH/brand-03.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/tQJGSqG/brand-02.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/n7S0Czk/brand-04.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
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
                                                    <img src="https://i.ibb.co/9VLh9JH/brand-03.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <Row className='rowss'>
                                        <Col>
                                            <div class="wrap10 boxs1">
                                                <div class="box10 four10">

                                                    <img src="https://i.ibb.co/0XKC96K/brand-05.webp" alt="" className='client-img' />

                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col>
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/9VLh9JH/brand-03.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/tQJGSqG/brand-02.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/n7S0Czk/brand-04.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
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
                                                    <img src="https://i.ibb.co/9VLh9JH/brand-03.webp" alt="" className='client-img' />
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

                                        <Col>
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/9VLh9JH/brand-03.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/tQJGSqG/brand-02.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div class="wrap10">
                                                <div class="box10 four10">
                                                    <img src="https://i.ibb.co/n7S0Czk/brand-04.webp" alt="" className='client-img' />
                                                    <hr />
                                                    <p>John Due</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
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
                                                    <img src="https://i.ibb.co/9VLh9JH/brand-03.webp" alt="" className='client-img' />
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