import { faArrowRight, faArrowsUpDownLeftRight, faArrowTrendUp, faArrowUp, faArrowUpRightDots, faArrowUpRightFromSquare, faHeartbeat } from '@fortawesome/free-solid-svg-icons';
// import {faArrowTrendUp  } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
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
                    <Col lg='4' md='6' sm='12'>
                        <a href="">
                            <div class="portfolioWrap">
                                <div class="portfolioBox four">
                                    <div className='portfolio-img'>
                                        <img src='https://media.wired.com/photos/5f46e666f7889e749ac05577/master/w_2560%2Cc_limit/security-firefox-andriod-app.jpg' className='portfolio-img' />
                                    </div>
                                    <div className='portfolio-title'>
                                        <h5>Development</h5>
                                        <div className='portfolio-liked'>
                                            <FontAwesomeIcon icon={faHeart} />
                                            <h6>35</h6>
                                        </div>
                                    </div>
                                    <h2>Design for tecnology and services</h2>
                                    <FontAwesomeIcon icon={faArrowTrendUp} className="portfolio-icons" />
                                </div>
                            </div>
                        </a>
                    </Col>

                    <Col lg='4' md='6' sm='12'>
                        <a href="">
                            <div class="portfolioWrap">
                                <div class="portfolioBox four">
                                    <div className='portfolio-img'>
                                        <img src='https://media.wired.com/photos/5f46e666f7889e749ac05577/master/w_2560%2Cc_limit/security-firefox-andriod-app.jpg' className='portfolio-img' />
                                    </div>
                                    <div className='portfolio-title'>
                                        <h5>Development</h5>
                                        <div className='portfolio-liked'>
                                            <FontAwesomeIcon icon={faHeart} />
                                            <h6>35</h6>
                                        </div>
                                    </div>
                                    <h2>Design for tecnology and services</h2>
                                    <FontAwesomeIcon icon={faArrowTrendUp} className="portfolio-icons" />
                                </div>
                            </div>
                        </a>
                    </Col>

                    <Col lg='4' md='6' sm='12'>
                        <a href="">
                            <div class="portfolioWrap">
                                <div class="portfolioBox four">
                                    <div className='portfolio-img'>
                                        <img src='https://as01.epimg.net/meristation/imagenes/2019/07/01/betech/1561973633_476827_1561973908_noticia_normal_recorte1.jpg' className='portfolio-img' />
                                    </div>
                                    <div className='portfolio-title'>
                                        <h5>Development</h5>
                                        <div className='portfolio-liked'>
                                            <FontAwesomeIcon icon={faHeart} />
                                            <h6>35</h6>
                                        </div>
                                    </div>
                                    <h2>Design for tecnology and services</h2>
                                    <FontAwesomeIcon icon={faArrowTrendUp} className="portfolio-icons" />
                                </div>
                            </div>
                        </a>
                    </Col>

                    <Col lg='4' md='6' sm='12'>
                        <a href="">
                            <div class="portfolioWrap">
                                <div class="portfolioBox four">
                                    <div className='portfolio-img'>
                                        <img src='https://i.blogs.es/d0d7f4/in-app/1366_2000.jpg' className='portfolio-img' />
                                    </div>
                                    <div className='portfolio-title'>
                                        <h5>Development</h5>
                                        <div className='portfolio-liked'>
                                            <FontAwesomeIcon icon={faHeart} />
                                            <h6>35</h6>
                                        </div>
                                    </div>
                                    <h2>Design for tecnology and services</h2>
                                    <FontAwesomeIcon icon={faArrowTrendUp} className="portfolio-icons" />
                                </div>
                            </div>
                        </a>
                    </Col>

                    <Col lg='4' md='6' sm='12'>
                        <a href="">
                            <div class="portfolioWrap">
                                <div class="portfolioBox four">
                                    <div className='portfolio-img'>
                                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-VVlXUaPYmyJOZ_l9PuWxjU9qX5U30xBaAlGB_FVR-ejipfDVea-47toZM7UXoXXtpbs&usqp=CAU' className='portfolio-img' />
                                    </div>
                                    <div className='portfolio-title'>
                                        <h5>Development</h5>
                                        <div className='portfolio-liked'>
                                            <FontAwesomeIcon icon={faHeart} />
                                            <h6>35</h6>
                                        </div>
                                    </div>
                                    <h2>Design for tecnology and services</h2>
                                    <FontAwesomeIcon icon={faArrowTrendUp} className="portfolio-icons" />
                                </div>
                            </div>
                        </a>
                    </Col>

                    <Col lg='4' md='6' sm='12'>
                        <a href="">
                            <div class="portfolioWrap">
                                <div class="portfolioBox four">
                                    <div className='portfolio-img'>
                                        <img src='https://i.ibb.co/Mnmn2RN/portfolio-03.webp' className='portfolio-img' />
                                    </div>
                                    <div className='portfolio-title'>
                                        <h5>Development</h5>
                                        <div className='portfolio-liked'>
                                            <FontAwesomeIcon icon={faHeart} />
                                            <h6>35</h6>
                                        </div>
                                    </div>
                                    <h2>Design for tecnology and services</h2>
                                    <FontAwesomeIcon icon={faArrowTrendUp} className="portfolio-icons" />
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