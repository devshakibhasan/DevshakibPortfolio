import { faFacebookF, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons';
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
                            <Tabs defaultActiveKey="Profile" className='tabs ' >

                              

                                <Tab eventKey="Profile" title="Profile" className='profile'>
                                    <div className="tab-item-wrapper">
                                        <Row className='rowss'>
                                            <Col>
                                                <div class="wrap25">
                                                    <div class="box25 four9">

                                                        <div class="container-fluid " id="about">
                                                            <div class="container">
                                                                <div class="position-relative d-flex align-items-center justify-content-center">
                                                                    <h1 class="display-1 text-uppercase text-white" >About</h1>
                                                                    <h1 class="position-absolute text-uppercase text-primary">About Me</h1>
                                                                </div>
                                                                
                                                                <div class="row align-items-center">
                                                                <div class="col-lg-5 ">
                                                                        <img class="img-fluid about-img" src="https://i.ibb.co/ynDRm9d/image9-1.jpg" alt="" ></img>
                                                                    </div>
                                                                    <div class="col-lg-7">
                                                                        <h3 class="mb-4">UI/UX Designer and Web Developer</h3>
                                                                        <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum. Amet dolor stet lorem diam dolor justo et dolor dolor dolor</p>
                                                                        <div class="row mb-3 textT ">
                                                                            <div class="col-sm-6 py-2"><h6>Name: <span class="text-secondary">Shakib Hasan</span></h6></div>
                                                                            <div class="col-sm-6 py-2"><h6>Birthday: <span class="text-secondary">1 July 2000</span></h6></div>
                                                                            <div class="col-sm-6 py-2"><h6>Degree: <span class="text-secondary">Hon's</span></h6></div>
                                                                            <div class="col-sm-6 py-2"><h6>Experience: <span class="text-secondary">3+ Years</span></h6></div>
                                                                            <div class="col-sm-6 py-2"><h6>Phone: <span class="text-secondary">01858694456</span></h6></div>
                                                                            <div class="col-sm-6 py-2"><h6>Email: <span class="text-secondary">devshakibhasan@gmail.com</span></h6></div>
                                                                            <div class="col-sm-6 py-2"><h6>Address: <span class="text-secondary">Siddhirgnaj,Narayanganj</span></h6></div>
                                                                            <div class="col-sm-6 py-2"><h6>Freelance: <span class="text-secondary">Available</span></h6></div>
                                                                        </div>

                                                                        <div className='box20'>
                                                                            <Col>
                                                                                <div class="wrap20">
                                                                                    <div class="box22 four">


                                                                                        <h2 className='numb'>3+</h2>
                                                                                        <h2> Years of experiences</h2>
                                                                                    </div>


                                                                                </div>
                                                                            </Col>
                                                                            <Col>
                                                                                <div class="wrap20">
                                                                                    <div class="box22 four">
                                                                                        <h2 className='numb'>10+</h2>
                                                                                        <h2> Completed Projects</h2>


                                                                                    </div>


                                                                                </div>
                                                                            </Col>
                                                                            <Col>
                                                                                <div class="wrap20">
                                                                                    <div class="box22 four">
                                                                                        <h2 className='numb'>20+</h2>
                                                                                        <h2> Happy Customers</h2>

                                                                                    </div>


                                                                                </div>
                                                                            </Col>
                                                                            <Col>
                                                                                <div class="wrap20">
                                                                                    <div class="box22 four">
                                                                                    <h2 className='numb'>5+</h2>
                                                                                        <h2> Awards won</h2>

                                                                                    </div>


                                                                                </div>
                                                                            </Col>
                                                                        </div>

                                                                        <div className='social2'>
                                                                            <Col className='bottom1'>
                                                                                <div class="wrap20">
                                                                                    <div class="btn btn__secondary btn-first btn-first1"> <FontAwesomeIcon icon={faEnvelope} className="mail" /><p>Hire Me</p></div>
                                                                                </div>
                                                                            </Col>

                                                                            <Col className='bottom1 bottom4'>
                                                                                <div className='socia-link'>
                                                                                    <div class="wrap20">
                                                                                        <div class="btn btn__secondary btn-second"><FontAwesomeIcon icon={faDownload} className="mail" /><p>Download CV</p></div>
                                                                                    </div>
                                                                                </div>
                                                                            </Col>
                                                                        </div>
                                                                        {/* <a href="" class="btn">Hire Me</a>
                                                                        <a href="" class="btn">Learn More</a> */}
                                                                    </div>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Tab>
                                <Tab eventKey="Education" title="Education">
                                    <div className="tab-item-wrapper">
                                        <Row className='rowss'>
                                            <Col  >
                                                <div class="wrap18 boxs1">
                                                    <div class="box18 four18">

                                                        <h3> Computer Science and Engineering</h3>
                                                        <p>National University Bangladesh (2019 - 2023)</p>
                                                        <hr />
                                                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col>
                                                <div class="wrap18 ">
                                                    <div class="box18 four18">
                                                        <h3>Higher Secondary Certificate</h3>
                                                        <p>Haziganj Model Govt. College (2016 - 2018)</p>
                                                        <hr />
                                                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col>
                                                <div class="wrap18 wrapC">
                                                    <div class="box18 four18">
                                                        <h3>Secondary School Certificate</h3>
                                                        <p>Ramgonj High School (2016)</p>
                                                        <hr />
                                                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col>
                                                <div class="wrap18 wrapC">
                                                    <div class="box18 four18">
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