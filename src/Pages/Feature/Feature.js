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
                                <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                                <FontAwesomeIcon icon={faArrowRight} className="Feature-icons" />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="wrap">
                            <div class="box1 four">
                            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""><path className="Feature-iconss1" d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path className="Feature-iconss1" d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
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
                            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""><path className="Feature-iconss" d="M5 12.55a11 11 0 0 1 14.08 0"></path><path className="Feature-iconss" d="M1.42 9a16 16 0 0 1 21.16 0"></path><path className="Feature-iconss" d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line className="Feature-iconss" x1="12" y1="20" x2="12.01" y2="20"></line></svg>
                                <h2>Back-End Development</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                                <FontAwesomeIcon icon={faArrowRight} className="Feature-icons" />
                            </div>
                        </div>
                    </Col>
                  
                    <Col>
                        <div class="wrap">
                            <div class="box1 four">
                            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""><path className="Feature-iconss2" d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path></svg>
                                <h2>App Development</h2>
                                <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.</p>
                                <FontAwesomeIcon icon={faArrowRight} className="Feature-icons" />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="wrap">
                            <div class="box1 four">
                            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""><path className="Feature-iconss3" d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path className="Feature-iconss3" d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path className="Feature-iconss3" d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path className="Feature-iconss3" d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path className="Feature-iconss3" d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path className="Feature-iconss3" d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path className="Feature-iconss3" d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z" ></path ><path className="Feature-iconss3" d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z" ></path ></svg>
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