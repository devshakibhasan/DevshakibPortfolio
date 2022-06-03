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

                                <Tabs defaultActiveKey="Education" className='tabs'>


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
                                    <Tab eventKey="Experience" title="Experience">
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