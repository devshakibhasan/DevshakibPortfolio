import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Nav, Navbar, Button, Container, NavDropdown, Offcanvas, Tabs, Tab, Row, Col } from 'react-bootstrap';

import './ResumeNavbar.css'
import './ResumeNavbarcopy.css'

const ResumeNavbar = () => {
    return (
        <div >


            <Container>
                <div className="tab-wrapper">
                    <div className='container' >
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 ">
                                <Tabs defaultActiveKey="Profile" className='tabs'>


                                    <Tab eventKey="Profile" title="Profile">

                                        <div className="tab-item-wrapper">
                                            <Row>
                                                <Col>
                                                    <div class="wrap9">
                                                        <div class="box9 four9">

                                                            <Row>
                                                                <Col>
                                                                    <img src='https://i.ibb.co/K5fvWQ6/shakib2-removebg-preview.png' className='my-img' alt="" />
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
                                                                        <div class="col-sm-6 py-2"><h6>Address: <span class="text-secondary">123 Street, New York, USA</span></h6></div>
                                                                        <div class="col-sm-6 py-2"><h6>Freelance: <span class="text-secondary">Available</span></h6></div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </div>
                                                </Col>


                                            </Row>
                                        </div>
                                    </Tab>


                                    <Tab eventKey="Education" title="Education">
                                        <div className="tab-item-wrapper">
                                            <Row>
                                                <Col>
                                                    <div class="wrap8">
                                                        <div class="box8 four8">

                                                            <h3> Computer Science and Engineering</h3>
                                                            <p>National University Bangladesh (2019 - 2023)</p>
                                                            <hr />
                                                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col>
                                                    <div class="wrap8">
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
                                    <Tab eventKey="Profesional Skill" title="Profesional Skill">
                                        <div className="tab-item-wrapper">
                                            <Row>
                                                <Col>
                                                    <div class="wrap8">
                                                        <div class="box8 four8">

                                                            <h3> Computer Science and Engineering</h3>
                                                            <p>National University Bangladesh (2019 - 2023)</p>
                                                            <hr />
                                                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col>
                                                    <div class="wrap8">
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
                                    <Tab eventKey="Interview" title="Interview">
                                        <div className="tab-item-wrapper">
                                            <Row>
                                                <Col>
                                                    <div class="wrap8">
                                                        <div class="box8 four8">

                                                            <h3> Computer Science and Engineering</h3>
                                                            <p>National University Bangladesh (2019 - 2023)</p>
                                                            <hr />
                                                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col>
                                                    <div class="wrap8">
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
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>


        </div>
    );
};

export default ResumeNavbar;