import { faArrowRight, faArrowUp, faArrowUpRightDots, faArrowUpRightFromSquare,  faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import {  faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Portfolio.css'
const Portfolio = () => {
    return (

        <div className='Portfolio' id='portfolio'>
            <Container className='Portfolio-Container'>
                <div className='heading'>
                    <p>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
                </div>
                <div className='heading'>
                    <h1>My Portfolio</h1>
                </div>
                <Row>
                    <Col>
                        <a href="">
                            <div class="wrap4">
                                <div class="box four">
                                    <img src='https://i.ibb.co/51MqbfF/img1.png' className='portfolio-img' />
                                    <div className='portfolio-title'>
                                        <h5>Development</h5>
                                        <div className='portfolio-liked'>
                                              <FontAwesomeIcon icon={faHeart} />
                                            <h6>35</h6>
                                        </div>
                                    </div>
                                    <div className='portfolio-title'>
                                        <h2>Design for tecnology and services</h2>
                                        <a href="#" className='iconF'> <FontAwesomeIcon icon={faArrowRight} className="Feature-icons" /> </a>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col>
                        <a href="">
                            <div class="wrap4">
                                <div class="box four">
                                    <img src='https://i.ibb.co/2PWN6Yh/portfolio-01.webp' className='portfolio-img' />
                                    <div className='portfolio-title'>
                                        <h5>Development</h5>
                                        <div className='portfolio-liked'>
                                            <FontAwesomeIcon icon={faHeart} />
                                            <h6>35</h6>
                                        </div>
                                    </div>
                                    <div className='portfolio-title'>
                                        <h2>Design for tecnology and services</h2>
                                        <a href="#" className='iconF'> <FontAwesomeIcon icon={faArrowRight} className="Feature-icons" /> </a>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col>
                        <a href="">
                            <div class="wrap4">
                                <div class="box four">
                                    <img src='https://i.ibb.co/1qGwmT2/portfolio-06.webp' className='portfolio-img' />
                                    <div className='portfolio-title'>
                                        <h5>Development</h5>
                                        <div className='portfolio-liked'>
                                            <FontAwesomeIcon icon={faHeart} />
                                            <h6>35</h6>
                                        </div>
                                    </div>
                                    <div className='portfolio-title'>
                                        <h2>Design for tecnology and services</h2>
                                        <a href="#" className='iconF'> <FontAwesomeIcon icon={faArrowRight} className="Feature-icons" /> </a>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Col>


                    <Col>
                        <a href="">
                            <div class="wrap4">
                                <div class="box four">
                                    <img src='https://i.ibb.co/v3vd7Ct/portfolio-04.webp' className='portfolio-img' />
                                    <div className='portfolio-title'>
                                        <h5>Development</h5>
                                        <div className='portfolio-liked'>
                                            <FontAwesomeIcon icon={faHeart} />
                                            <h6>35</h6>
                                        </div>
                                    </div>
                                    <div className='portfolio-title'>
                                        <h2>Design for tecnology and services</h2>
                                        <a href="#" className='iconF'> <FontAwesomeIcon icon={faArrowRight} className="Feature-icons" /> </a>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col>
                        <a href="">
                            <div class="wrap4">
                                <div class="box four">
                                    <img src='https://i.ibb.co/gdv5tp5/portfolio-05.webp' className='portfolio-img' />
                                    <div className='portfolio-title'>
                                        <h5>Development</h5>
                                        <div className='portfolio-liked'>
                                            <FontAwesomeIcon icon={faHeart} />
                                            <h6>35</h6>
                                        </div>
                                    </div>
                                    <div className='portfolio-title'>
                                        <h2>Design for tecnology and services</h2>
                                        <a href="#" className='iconF'> <FontAwesomeIcon icon={faArrowRight} className="Feature-icons" /> </a>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col>
                        <a href="">
                            <div class="wrap4">
                                <div class="box four">
                                    <img src='https://i.ibb.co/Mnmn2RN/portfolio-03.webp' className='portfolio-img' />
                                    <div className='portfolio-title'>
                                        <h5>Development</h5>
                                        <div className='portfolio-liked'>
                                            <FontAwesomeIcon icon={faHeart} />
                                            <h6>35</h6>
                                        </div>
                                    </div>
                                    <div className='portfolio-title'>
                                        <h2>Design for tecnology and services</h2>
                                        <a href="#" className='iconF'> <FontAwesomeIcon icon={faArrowRight} className="Feature-icons" /> </a>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Portfolio;