import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Nav, Navbar, Button, Container, NavDropdown, Offcanvas, Tabs, Tab, Row, Col } from 'react-bootstrap';

import './ResumeNavbar.css'
import './ResumeNavbarcopy.css'

const ResumeNavbar = () => {
    return (
        <div >


            <Container className='Resume'>
                <div className="tab-wrapper">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 ">
                            <Tabs defaultActiveKey="Profile" className='tabs '>

                                <Tab eventKey="Education" title="Education">
                                    <div className="tab-item-wrapper">
                                        <Row className='rowss'>
                                            <Col  >
                                                <div class="wrap8 boxs1">
                                                    <div class="box8 four8">

                                                        <h3> Computer Science and Engineering</h3>
                                                        <p>National University Bangladesh (2019 - 2023)</p>
                                                        <hr />
                                                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col>
                                                <div class="wrap8 ">
                                                    <div class="box8 four8">
                                                        <h3>Higher Secondary Certificate</h3>
                                                        <p>Haziganj Model Govt. College (2016 - 2018)</p>
                                                        <hr />
                                                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col>
                                                <div class="wrap8 wrapC">
                                                    <div class="box8 four8">
                                                        <h3>Secondary School Certificate</h3>
                                                        <p>Ramgonj High School (2016)</p>
                                                        <hr />
                                                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col>
                                                <div class="wrap8 wrapC">
                                                    <div class="box8 four8">
                                                        <h3>Primary School Certificate</h3>
                                                        <p>Darikandi Govt Primary School(2010)</p>
                                                        <hr />
                                                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Tab>

                                <Tab eventKey="Profile" title="Profile" className='profile'>
                                    <div className="tab-item-wrapper">
                                        <Row className='rowss'>
                                            <Col>
                                                <div class="wrap9">
                                                    <div class="box9 four9">

                                                        {/* <Row className='rowss'>
                                                                <Col>
                                                                    <img src='https://i.ibb.co/K5fvWQ6/shakib2-removebg-preview.png' className='my-img profile-img' alt="" />
                                                                </Col>
                                                                <Col>
                                                                    <h3>MERN Stack Developer</h3>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus est, finibus ut congue sed, faucibus ut dui. Sed congue nisl dolor, id dapibus leo elementum posuere. Ut aliquam metus quis laoreet elementum. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Aliquam porta faucibus arcu, et consequat velit vestibulum in. Donec quis tellus ut urna volutpat posuere quis consectetur quam.</p>
                                                                    <div class="row mb-3 textT ">
                                                                        <div class="col-sm-6 py-2"><h6>Name: <span class="text-secondary">Shakib Hasan</span></h6></div>
                                                                        <div class="col-sm-6 py-2"><h6>Birthday: <span class="text-secondary">1 July 2000</span></h6></div>
                                                                        <div class="col-sm-6 py-2"><h6>Degree: <span class="text-secondary">Honours</span></h6></div>
                                                                        <div class="col-sm-6 py-2"><h6>Phone: <span class="text-secondary">+880 1858694456</span></h6></div>
                                                                        <div class="col-sm-6 py-2"><h6>Email: <span class="text-secondary">shakibhasan@gmail.com</span></h6></div>
                                                                        <div class="col-sm-6 py-2"><h6>Address: <span class="text-secondary">Siddirganj, Narayan ganj, Bangladesh</span></h6></div>
                                                                        <div class="col-sm-6 py-2"><h6>Freelance: <span class="text-secondary">Available</span></h6></div>
                                                                    </div>
                                                                </Col>
                                                            </Row> */}
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Tab>

                                <Tab eventKey="Profesional Skill" title="Profesional Skill" className='my-skill'>
                                    <Row className='rowss'>
                                        <Col className='technical-skill-section'>
                                            <div class="wrapper">
                                                <div class="shape-1"></div>
                                                <div class="shape-2"></div>
                                                <div class="container">
                                                    <h2 className='technical-skill'>Technical Skills </h2>
                                                    <div class="skills">
                                                        <div class="details">
                                                            <span>HTML</span>
                                                            <span>95%</span>
                                                        </div>
                                                        <div class="bar">
                                                            <div id="html-bar"></div>
                                                        </div>
                                                    </div>
                                                    <div class="skills">
                                                        <div class="details">
                                                            <span>CSS</span>
                                                            <span>75%</span>
                                                        </div>
                                                        <div class="bar">
                                                            <div id="css-bar"></div>
                                                        </div>
                                                    </div>
                                                    <div class="skills">
                                                        <div class="details">
                                                            <span>Javascript</span>
                                                            <span>72%</span>
                                                        </div>
                                                        <div class="bar">
                                                            <div id="js-bar"></div>
                                                        </div>
                                                    </div>
                                                    <div class="skills">
                                                        <div class="details">
                                                            <span>jQuery</span>
                                                            <span>68%</span>
                                                        </div>
                                                        <div class="bar">
                                                            <div id="jQuery-bar"></div>
                                                        </div>
                                                    </div>
                                                    <div class="skills">
                                                        <div class="details">
                                                            <span>React js</span>
                                                            <span>78%</span>
                                                        </div>
                                                        <div class="bar">
                                                            <div id="React-bar"></div>
                                                        </div>
                                                    </div>
                                                    <div class="skills">
                                                        <div class="details">
                                                            <span>MongoDB</span>
                                                            <span>68%</span>
                                                        </div>
                                                        <div class="bar">
                                                            <div id="MongoDB-bar"></div>
                                                        </div>
                                                    </div>
                                                    <div class="skills">
                                                        <div class="details">
                                                            <span>Express Js</span>
                                                            <span>65%</span>
                                                        </div>
                                                        <div class="bar">
                                                            <div id="Express-bar"></div>
                                                        </div>
                                                    </div>
                                                    <div class="skills">
                                                        <div class="details">
                                                            <span>Node Js</span>
                                                            <span>70%</span>
                                                        </div>
                                                        <div class="bar">
                                                            <div id="Node-bar"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <h2 className='Profesional-Skills'>Profesional Skills </h2>
                                            <div class="container__progressbars">

                                                <div>
                                                    <div class="progressbar">
                                                        <svg class="progressbar__svg">
                                                            <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-com shadow-com"> </circle>
                                                        </svg>
                                                        <span class="progressbar__text shadow-com">88%</span>
                                                    </div>
                                                    <h4 className='Profesional-Skills'>Communication</h4>
                                                </div>

                                                <div className='barss'>
                                                    <div class="progressbar">
                                                        <svg class="progressbar__svg">
                                                            <circle cx="80" cy="60" r="70" class="progressbar__svg-circle circle-team shadow-ts"> </circle>
                                                        </svg>
                                                        <span class="progressbar__text shadow-ts">65%</span>
                                                    </div>
                                                    <h4 className='Profesional-Skills'>Team Work</h4>
                                                </div>
                                                <div>
                                                    <div class="progressbar">
                                                        <svg class="progressbar__svg">
                                                            <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-project shadow-ts"> </circle>
                                                        </svg>
                                                        <span class="progressbar__text shadow-ts">80%</span>
                                                    </div>
                                                    <h4 className='Profesional-Skills1'>Project Management</h4>
                                                    <h4 className='Profesional-Skills2'>Project</h4>
                                                    <h4 className='Profesional-Skills2'>Management</h4>
                                                </div>
                                                <div className='barss2'>
                                                    <div class="progressbar">
                                                        <svg class="progressbar__svg">
                                                            <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-creativity shadow-ts"> </circle>
                                                        </svg>
                                                        <span class="progressbar__text shadow-ts">75%</span>
                                                    </div>
                                                    <h4 className='Profesional-Skills'>Creativity</h4>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>

            </Container>


        </div>
    );
};

export default ResumeNavbar;