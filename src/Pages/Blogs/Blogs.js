
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
                                <img src='https://www.appsflyer.com/wp-content/uploads/2021/10/Feature-image-917x480-2.png' className='portfolio-img' />
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
                                <img src='https://conteudo.imguol.com.br/c/noticias/75/2020/01/25/tinder-namoro-virtual-namora-online-app-paquera-match-1579961052689_v2_4x3.png' className='portfolio-img' />
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
                                <img src='https://d540vms5r2s2d.cloudfront.net/mad/uploads/mad_blog_5c24bb0a902351545911050.png' className='portfolio-img' />
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