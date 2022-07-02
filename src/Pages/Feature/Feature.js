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
                <h1 className='Feature-heading'>What I Do</h1>
                <Row className='Features'>
                   
                    <Col>
                        <div class="wrap" >
                            <div class="box1 four" >
                            <FontAwesomeIcon icon={faBars} className="Feature-icon" />
                                <h2>Bussinesss Stratagy</h2>
                                <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                                <FontAwesomeIcon icon={faArrowRight} className="Feature-icons" />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="wrap">
                            <div class="box1 four boxes">
                            <img src="https://i.ibb.co/PcWTCsw/image-3.png" className="Feature-iconss" alt="" />
                                <h3>MERN Stack Development</h3>
                                <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.</p>
                                <FontAwesomeIcon icon={faArrowRight} className="Feature-icons" />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="wrap">
                            <div class="box1 four">
                            <FontAwesomeIcon icon={faComment} className="Feature-icon" />
                                <h3>Front-End Development</h3>
                                <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                                <FontAwesomeIcon icon={faArrowRight} className="Feature-icons" />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="wrap">
                            <div class="box1 four">
                            <img src="https://i.ibb.co/D7pks4V/image-2.png" className="Feature-iconss" alt="" />
                                <h2>Back-End Development</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                                <FontAwesomeIcon icon={faArrowRight} className="Feature-icons" />
                            </div>
                        </div>
                    </Col>
                  
                    <Col>
                        <div class="wrap">
                            <div class="box1 four">
                            <img src="https://i.ibb.co/4jdNrCj/image-1.png" className="Feature-iconss" alt="" />
                                <h2>App Development</h2>
                                <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.</p>
                                <FontAwesomeIcon icon={faArrowRight} className="Feature-icons" />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="wrap">
                            <div class="box1 four">
                            <img src="https://i.ibb.co/xHjQKt4/image.png" className="Feature-iconss" alt="" />
                                <h2>Flutter Development</h2>
                                <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                                
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