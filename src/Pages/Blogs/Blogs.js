
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
                    <Col>
                        <div class="wrap13">
                            <div class="box13 four13">
                                <div className='img1'>
                                <img src='https://i.ibb.co/VDxH8mJ/blog-big-01.webp' className='portfolio-img' />
                                </div>
                                <div className='portfolio-title'>
                                    <h5>APPLICATION</h5>
                                    <div className='portfolio-liked'>
                                        <FontAwesomeIcon icon={faClock} />
                                        <h6>2 min read</h6>
                                    </div>
                                </div>

                                <h2>Mobile app landing design and app maintain</h2>
                                <FontAwesomeIcon icon={faArrowTrendUp} className="Feature-iconssss" />

                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="wrap13">
                            <div class="box13 four13">
                                <div className='img1'>
                                <img src='https://i.ibb.co/RzZ3CBd/blog-02.webp' className='portfolio-img' />
                                </div>
                                <div className='portfolio-title'>
                                    <h5>DEVELOPMENT</h5>
                                    <div className='portfolio-liked'>
                                        <FontAwesomeIcon icon={faClock} />
                                        <h6>2 min read</h6>
                                    </div>
                                </div>

                                <h2>Design for tecnology and services</h2>
                                <FontAwesomeIcon icon={faArrowTrendUp} className="Feature-icons" />

                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="wrap13">
                            <div class="box13 four13">
                            <div className='img1'>
                                <img src='https://i.ibb.co/Np95Nzw/blog-03.webp' className='portfolio-img' />
                                </div>
                                <div className='portfolio-title'>
                                    <h5>Development</h5>
                                    <div className='portfolio-liked'>
                                        <FontAwesomeIcon icon={faClock} />
                                        <h6>2 min read</h6>
                                    </div>
                                </div>

                                <h2>Design for tecnology and services</h2>
                                <FontAwesomeIcon icon={faArrowTrendUp} className="Feature-icons" />

                            </div>
                        </div>
                    </Col>



                </Row>
            </Container>
        </div>
    );
};

export default Blogs;