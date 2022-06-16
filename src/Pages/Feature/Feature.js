import { faFacebookF, faLinkedin, faNode, faNodeJs, faReact, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faBars, faBookOpen, faComment, faEquals } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


import './Feature.css'
const Feature = () => {


    return (
        <div className='Feature' id='Feature'>
            <Container className='Feature-container'>
                <h5>FEATURES</h5>
                <h1>What I Do</h1>
                <Row className='Features'>
                   
                    <Col>
                        <div class="wrap" >
                            <div class="box1 four" >
                            <FontAwesomeIcon icon={faBars} className="Feature-icon" />
                                <h2 >Bussinesss Stratagy</h2>
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                <FontAwesomeIcon icon={faArrowRight} className="Feature-icons" />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="wrap">
                            <div class="box1 four">
                            <FontAwesomeIcon icon={faBookOpen} className="Feature-icon" />
                                <h3>MERN Stack Development</h3>
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                <FontAwesomeIcon icon={faArrowRight} className="Feature-icons" />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="wrap">
                            <div class="box1 four">
                            <FontAwesomeIcon icon={faComment} className="Feature-icon" />
                                <h3>Front-End Development</h3>
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                <FontAwesomeIcon icon={faArrowRight} className="Feature-icons" />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="wrap">
                            <div class="box1 four">
                            <FontAwesomeIcon icon={faBars} className="Feature-icon" />
                                <h2>Back-End Development</h2>
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                <FontAwesomeIcon icon={faArrowRight} className="Feature-icons" />
                            </div>
                        </div>
                    </Col>
                  
                    <Col>
                        <div class="wrap">
                            <div class="box1 four">
                            <FontAwesomeIcon icon={faComment} className="Feature-icon" />
                                <h2>App Development</h2>
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                <FontAwesomeIcon icon={faArrowRight} className="Feature-icons" />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="wrap">
                            <div class="box1 four">
                            <FontAwesomeIcon icon={faBookOpen} className="Feature-icon" />
                                <h2>Flutter Development</h2>
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                <FontAwesomeIcon icon={faArrowRight} className="Feature-icons" />
                                <p className='p'></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Feature;