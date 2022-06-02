import { faArrowRight, faArrowUp, faArrowUpRightDots, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
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
                        <div class="wrap4">
                            <div class="box four">
                                <img src='https://i.ibb.co/gdv5tp5/portfolio-05.webp' className='portfolio-img' />
                                <h2>Bussinesss Stratagy</h2>
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                               <a href="#" className='iconF'> <FontAwesomeIcon icon={faArrowRight} className="Feature-icons" /> <h5>SEE MORE</h5> </a>
                              
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="wrap4">
                            <div class="box four">
                                <img src='https://i.ibb.co/2PWN6Yh/portfolio-01.webp' className='portfolio-img' />
                                <h3>MERN Stack Development</h3>
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                <a href="#" className='iconF'> <FontAwesomeIcon icon={faArrowRight} className="Feature-icons" /> <h5>SEE MORE</h5> </a>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="wrap4">
                            <div class="box four">
                                <img src='https://i.ibb.co/1qGwmT2/portfolio-06.webp' className='portfolio-img' />
                                <h3>Front-End Development</h3>
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                <a href="#" className='iconF'> <FontAwesomeIcon icon={faArrowRight} className="Feature-icons" /> <h5>SEE MORE</h5> </a>
                            </div>
                        </div>
                    </Col>
                

                    <Col>
                        <div class="wrap4">
                            <div class="box four">
                                <img src='https://i.ibb.co/v3vd7Ct/portfolio-04.webp' className='portfolio-img' />
                                <h2>App Development</h2>
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                <a href="#" className='iconF'> <FontAwesomeIcon icon={faArrowRight} className="Feature-icons" /> <h5>SEE MORE</h5> </a>
                            </div>
                        </div>
                    </Col>
                        <Col>
                        <div class="wrap4">
                            <div class="box four">
                                <img src='https://i.ibb.co/gdv5tp5/portfolio-05.webp' className='portfolio-img' />
                                <h2>Back-End Development</h2>
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                <a href="#" className='iconF'> <FontAwesomeIcon icon={faArrowRight} className="Feature-icons" /> <h5>SEE MORE</h5> </a>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="wrap4">
                            <div class="box four">
                                <img src='https://i.ibb.co/Mnmn2RN/portfolio-03.webp' className='portfolio-img' />
                                <h2>Flutter Development</h2>
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                <a href="#" className='iconF'> <FontAwesomeIcon icon={faArrowRight} className="Feature-icons" /> <h5>SEE MORE</h5> </a>
                                <p className='p'></p>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Portfolio;