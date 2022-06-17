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
                <p>CONTACT</p>
                <h1>Contact With Me</h1>
                <Row className='Contacts'>

                    <Col>
                        <div class="wrap14" >
                            <div class="box14 four" >
                                <div className='img'>
                                <img src='https://i.ibb.co/xXgxLbG/contact1.webp' className='' />
                                </div>
                                <h2 >Shakib Hasan</h2>
                                <h4>Chief Operating Officer</h4>
                                <p>I am available for freelance work. Connect with me via and call in to my account.</p>
                                <p>Phone: +01234567890
                                </p>
                                <p>Email: admin@example.com</p>
                                <Row className='iconss'>
                                    <Col className='bottom bottom1'>
                                        <p>FIND WITH ME</p>
                                        <div class="wrap2">
                                            <div class="box2 four">
                                                <a href="https://github.com/devshakibhasan">
                                                    <FontAwesomeIcon icon={faGithub} className="icons" />
                                                </a>


                                            </div>
                                            <div class="box2 four">
                                                <a href="https://www.facebook.com/devshakibhasan">
                                                    <FontAwesomeIcon icon={faFacebookF} className="icons" />
                                                </a>


                                            </div>
                                            <div class="box2 four">
                                                <a href="https://www.linkedin.com/in/devshakibhasan/">
                                                    <FontAwesomeIcon icon={faLinkedin} className="icons icons2" />
                                                </a>
                                            </div>
                                            <div class="box2 four">
                                                <a href="https://twitter.com/devshakibhasan">
                                                    <FontAwesomeIcon icon={faTwitter} className="icons icons3" />
                                                </a>
                                            </div>
                                            {/* <div class="box2 four">
                                        <a href="https://twitter.com/devshakibhasan">
                                            <FontAwesomeIcon icon={faInstagram} className="icons icons3" />
                                        </a>
                                    </div> */}

                                        </div>

                                    </Col>

                                </Row>

                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="wrap14">
                            <div class="box15 four">

                                <Form>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>YOUR NAME</Form.Label>
                                                <Form.Control type="email" placeholder="Enter Your Name" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label>PHONE NUMBER</Form.Label>
                                                <Form.Control type="number" placeholder="Enter Your Number" />
                                            </Form.Group>


                                        </Col>
                                    </Row>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>EMAIL</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Your email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>SUBJECT</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Your email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Example textarea</Form.Label>
                                        <Form.Control as="textarea" rows={7} />
                                    </Form.Group>
                                    <Button type="submit">
                                        Submit
                                    </Button>
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