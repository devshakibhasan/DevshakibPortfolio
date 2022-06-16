
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../Shared/NotFound/NotFound';
import './Blogs.css'

import { Nav, Navbar, Button, Container, NavDropdown, Offcanvas, Tabs, Tab, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Blogs = () => {
    return (
        <div id='Blogs' className='Blogs'>

            <div className='heading'>
                <p>VISIT MY BLOG AND KEEP YOUR FEEDBACK</p>
            </div>
            <div className='heading'>
                <h1>My Blogs</h1>
            </div>
            <Container>
                {/* <Row>
                    <Col>
                        <div class="wrap13">
                            <div class="box13 four13">
                                <img src='https://i.ibb.co/51MqbfF/img1.png' className='portfolio-img' />
                                <h2>T-shirt design is the part of design</h2>
                                <a href="#" className='iconF'> <FontAwesomeIcon icon={faArrowRight} className="Feature-icons" /> <h5>SEE MORE</h5> </a>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="wrap13">
                            <div class="box13 four13">
                                <img src='https://i.ibb.co/2PWN6Yh/portfolio-01.webp' className='portfolio-img' />
                                <h3>MERN Stack Development</h3>
                                <a href="#" className='iconF'> <FontAwesomeIcon icon={faArrowRight} className="Feature-icons" /> <h5>SEE MORE</h5> </a>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="wrap13">
                            <div class="box13 four13">
                                <img src='https://i.ibb.co/1qGwmT2/portfolio-06.webp' className='portfolio-img' />
                                <h3>Front-End Development</h3>
                                <a href="#" className='iconF'> <FontAwesomeIcon icon={faArrowRight} className="Feature-icons" /> <h5>SEE MORE</h5> </a>
                            </div>
                        </div>
                    </Col>



                </Row> */}
            </Container>
        </div>
    );
};

export default Blogs;