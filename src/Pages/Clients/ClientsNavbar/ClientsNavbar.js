import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Nav, Navbar, Button, Container, NavDropdown, Offcanvas, Tabs, Tab, Row, Col } from 'react-bootstrap';

import './ClientsNavbar.css'
import './ClientsNavbarcopy.css'

const ClientsNavbar = () => {
    return (
        <div >

            <Container>
                {/* <Row>
                    <Col>
                        <Nav className="flex-column navB" >
                            <Nav.Link href="#javascript" className='nav-Link' active>Javascript</Nav.Link>
                            <Nav.Link className='nav-Link'>
                                Product Design
                            </Nav.Link>
                            <Nav.Link href="#design" className='nav-Link'>
                                PSD To HTML
                            </Nav.Link>
                            <Nav.Link className='nav-Link'>
                                HTML To React
                            </Nav.Link>
                            <Nav.Link className='nav-Link'>
                                Python
                            </Nav.Link>
                        </Nav>
                    </Col>
                    <Col>
                        <div id='javascript' className='javascript'>
                            <p>Loremsdfjaksldldldldldldldldldldldldldldldldldldldldldldldldldldldldldldldldldldldldldldldldldldldldldldddajsdklfjafdjkasdfjklasdsssdsdsdddokaisdjfoijuaoiejuwrfijasdlkfqehawrfasdmnflkjasd;fhansdfnhjk;alsdhfjhajksdnhflkjhasdkjfhjkasdf;jkhaisdhf</p>
                        </div>
                        <div id='design' className='javascript'>
                            <p>Loremsdfjaks</p>
                        </div>
                    </Col>
                </Row> */}



                <div class="row collapse">
                    <div class="medium-3 columns">
                        <ul class="vertical tabs" data-tabs id="example-tabs">
                            <li class="tabs-title is-active"><a href="#panel1v" aria-selected="true">Tab 1</a></li>
                            <li class="tabs-title"><a href="#panel2v">Tab 2</a></li>
                            <li class="tabs-title"><a href="#panel3v">Tab 3</a></li>
                            <li class="tabs-title"><a href="#panel4v">Tab 4</a></li>
                            <li class="tabs-title"><a href="#panel5v">Tab 5</a></li>
                            <li class="tabs-title"><a href="#panel6v">Tab 6</a></li>
                        </ul>
                    </div>
                    <div class="medium-9 columns">
                        <div class="tabs-content" data-tabs-content="example-tabs">
                            <div class="tabs-panel is-active" id="panel1v">
                                <p>One</p>
                                <p>Check me out! I'm a super cool Tab panel with text content!</p>
                            </div>
                            <div class="tabs-panel" id="panel2v">
                                <p>Two</p>
                                <img class="thumbnail" src="//foundation.zurb.com/sites/docs/assets/img/generic/rectangle-7.jpg" />
                            </div>
                            <div class="tabs-panel" id="panel3v">
                                <p>Three</p>
                                <p>Check me out! I'm a super cool Tab panel with text content!</p>
                            </div>
                            <div class="tabs-panel" id="panel4v">
                                <p>Four</p>
                                <img class="thumbnail" src="//foundation.zurb.com/sites/docs/assets/img/generic/rectangle-2.jpg" />
                            </div>
                            <div class="tabs-panel" id="panel5v">
                                <p>Five</p>
                                <p>Check me out! I'm a super cool Tab panel with text content!</p>
                            </div>
                            <div class="tabs-panel" id="panel6v">
                                <p>Six</p>
                                <img class="thumbnail" src="//foundation.zurb.com/sites/docs/assets/img/generic/rectangle-8.jpg" />
                            </div>
                        </div>
                    </div>
                </div>

            </Container>


        </div>
    );
};

export default ClientsNavbar;