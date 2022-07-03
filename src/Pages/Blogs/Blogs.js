
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../Shared/NotFound/NotFound';
import './Blogs.css'

import { Nav, Navbar, Button, Container, NavDropdown, Offcanvas, Tabs, Tab, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowTrendUp, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

const Blogs = () => {
    return (
        <div id='Blogs' className='Blogs'>

            <div className='heading'>
                <p>VISIT MY BLOG AND KEEP YOUR FEEDBACK</p>
            </div>
            <div className='heading'>
                <h1>My Blogs</h1>
            </div>
            <Container className='blogs'>
                <Row>
                    <Col lg='4' md='6' sm='11' xs='11'>
                        <div class="portfolioWrap">
                            <a href="">
                                <div class="portfolioBox four BlogsBox">
                                    <div className='portfolio-img'>
                                        <img src='https://media.wired.com/photos/5f46e666f7889e749ac05577/master/w_2560%2Cc_limit/security-firefox-andriod-app.jpg' className='portfolio-img' />
                                    </div>
                                    <div className='portfolio-title'>
                                        <h5>APPLICATION</h5>
                                        <div className='portfolio-liked'>
                                            <FontAwesomeIcon icon={faClock} />
                                            <h6>2 min read</h6>
                                        </div>
                                    </div>
                                    <h2>Mobile app landing design</h2>
                                    <FontAwesomeIcon icon={faArrowTrendUp} className="portfolio-icons" />
                                </div>
                            </a>
                        </div>
                    </Col>
                    <Col lg='4' md='6' sm='11' xs='11'>
                        <div class="portfolioWrap">
                            <a href="">
                                <div class="portfolioBox four BlogsBox">
                                    <div className='portfolio-img'>
                                        <img src='https://media.wired.com/photos/5f46e666f7889e749ac05577/master/w_2560%2Cc_limit/security-firefox-andriod-app.jpg' className='portfolio-img' />
                                    </div>
                                    <div className='portfolio-title'>
                                        <h5>DEVELOPMENT</h5>
                                        <div className='portfolio-liked'>
                                            <FontAwesomeIcon icon={faClock} />
                                            <h6>2 min read</h6>
                                        </div>
                                    </div>
                                    <h2>Design for tecnology and services</h2>
                                    <FontAwesomeIcon icon={faArrowTrendUp} className="portfolio-icons" />
                                </div>
                            </a>
                        </div>
                    </Col>
                    <Col lg='4' md='6' sm='11' xs='11'>
                        <div class="portfolioWrap">
                            <a href="">
                                <div class="portfolioBox four BlogsBox">
                                    <div className='portfolio-img'>
                                        <img src='https://media.wired.com/photos/5f46e666f7889e749ac05577/master/w_2560%2Cc_limit/security-firefox-andriod-app.jpg' className='portfolio-img' />
                                    </div>
                                    <div className='portfolio-title'>
                                        <h5>APPLICATION</h5>
                                        <div className='portfolio-liked'>
                                            <FontAwesomeIcon icon={faClock} />
                                            <h6>2 min read</h6>
                                        </div>
                                    </div>
                                    <h2>Design for tecnology and services</h2>
                                    <FontAwesomeIcon icon={faArrowTrendUp} className="portfolio-icons" />
                                </div>
                            </a>
                        </div>
                    </Col>

                
                </Row>
            </Container>
        </div>
    );
};

export default Blogs;