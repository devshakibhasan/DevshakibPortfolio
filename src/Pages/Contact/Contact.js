import { faFacebookF, faLinkedin, faNode, faNodeJs, faReact, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faBars, faBookOpen, faComment, faEquals, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';


import './Contact.css'
const Contact = () => {


    return (
        <div className='Contact' id='Contact'>
            <Container className='Contact-container'>
                <div className='heading'>
                    <p>CONTACT</p>
                </div>
                <div className='heading'>
                    <h1>Contact With Me</h1>
                </div>
                <Row>

                    <Col lg='5' md='6' sm='12' xs='12'>
                        <div class="" >
                            <div class="box14 four" >
                                <div className='img'>
                                    <img src='https://images.unsplash.com/photo-1620841713108-18ad2b52d15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFuZCUyMGluJTIwaGFuZHxlbnwwfHwwfHw%3D&w=1000&q=80' className='' />
                                </div>
                                <h2 >Shakib Hasan</h2>
                                <h4>MERN Stack Developer</h4>
                                <p>I am available for freelance work. Connect with me via and call in to my account.</p>
                                <p>Phone: +8801858694456
                                </p>
                                <p>Email: devshakibhasan@gmail.com</p>
                                <Row className='iconss'>
                                    <Col className='bottom bottom2' lg='12' md='8'>
                                        <p>FIND WITH ME</p>
                                        <div class="TopWrap">
                                            <div class="TopBox four">
                                                <a href="https://github.com/devshakibhasan">
                                                    <FontAwesomeIcon icon={faGithub} className="icons" />
                                                </a>
                                            </div>
                                            <div class="TopBox four">
                                                <a href="https://www.facebook.com/devshakibhasan">
                                                    <FontAwesomeIcon icon={faFacebookF} className="icons" />
                                                </a>
                                            </div>
                                            <div class="TopBox four">
                                                <a href="https://www.linkedin.com/in/devshakibhasan/">
                                                    <FontAwesomeIcon icon={faLinkedin} className="icons icons2" />
                                                </a>
                                            </div>
                                            <div class="TopBox four">
                                                <a href="https://twitter.com/devshakibhasan">
                                                    <FontAwesomeIcon icon={faTwitter} className="icons icons3" />
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                            </div>
                        </div>
                    </Col>
                    <Col lg='7' md='6' sm='12' xs='12'>
                        <div class="">
                            <div class="box15 four">

                                <Form>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formBasicText">
                                                <Form.Label>YOUR NAME</Form.Label>
                                                <Form.Control type="text" placeholder="" className='_name' />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label>PHONE NUMBER</Form.Label>
                                                <Form.Control type="number" placeholder="" className='_number' />
                                            </Form.Group>


                                        </Col>
                                    </Row>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>EMAIL</Form.Label>
                                        <Form.Control type="email" placeholder="" className='_email' />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>SUBJECT</Form.Label>
                                        <Form.Control type="text" placeholder="" className='subject' />
                                    </Form.Group>

                                    <Form.Group className="mb-5  " controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>
                                            YOUR MESSAGE</Form.Label>
                                        <Form.Control as="textarea" rows={7} className='text_area' />
                                    </Form.Group>
                                    <div className='contact-btn'>
                                        <Button type="submit" className='button'>
                                            Submit
                                        </Button>
                                    </div>

                                </Form>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;