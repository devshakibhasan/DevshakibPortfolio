import { faFacebookF, faGithub, faInstagram, faLinkedin, faNode, faNodeJs, faReact, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faDownload, faEnvelopeOpen, faUpDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


import './Home.css'
const Home = () => {

    return (
        <div className='Home' id='Home'>
            <Container className='Home-container'>
                <Row>
                    <Col className='left-content' lg='8'  >
                        <h5>WELCOME TO MY WORLD</h5>
                        <h1>Hi, I’m <span>Shakib Hasan</span> </h1>

                        <p>I am a motivated and hardworking individual who has been in the work force for over two years. My roles include working with clients from different backgrounds to provide high quality customer service within tight deadlines and ensuring client satisfaction whilst also maintaining strict levels of confidentiality

</p>


                        <Row className='iconss'>
                            <Col className='bottom bottom1'>
                                <p>FIND WITH ME</p>
                                <div class="wrap2">
                                    <div class="box2 four">
                                        <a href="https://github.com/devshakibhasan">
                                            <FontAwesomeIcon icon={faGithub} className="icons" />
                                        </a>


                                    </div>
                                    <div class="box2 four">
                                        <a href="https://www.facebook.com/devshakibhasan">
                                            <FontAwesomeIcon icon={faFacebookF} className="icons" />
                                        </a>


                                    </div>
                                    <div class="box2 four">
                                        <a href="https://www.linkedin.com/in/devshakibhasan/">
                                            <FontAwesomeIcon icon={faLinkedin} className="icons icons2" />
                                        </a>
                                    </div>
                                    <div class="box2 four">
                                        <a href="https://twitter.com/devshakibhasan">
                                            <FontAwesomeIcon icon={faTwitter} className="icons icons3" />
                                        </a>
                                    </div>
                                    {/* <div class="box2 four">
                                        <a href="https://twitter.com/devshakibhasan">
                                            <FontAwesomeIcon icon={faInstagram} className="icons icons3" />
                                        </a>
                                    </div> */}

                                </div>

                            </Col>
                            <Col className='bottom bottom2' >
                                <p className='best'>BEST SKILL ON</p>
                                <div className='socia-link'>
                                    <div class="wrap2 wrapI">
                                        <div class="box2 four">
                                            <img className='dbImg' src='https://i.ibb.co/s1fRSj3/mongodb.png' />
                                        </div>

                                        <div class="box2 four">
                                            <img className='dbImg' src='https://i.ibb.co/mvyLd4v/express.png' />
                                        </div>

                                        <div class="box2 four">
                                            <FontAwesomeIcon icon={faReact} className="icons" />
                                        </div>

                                        <div class="box2 four">
                                            <FontAwesomeIcon icon={faNode} className="icons" />
                                        </div>

                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className='social'>
                            <Col className='bottom'>
                                <div class="wrap2">
                                    <div class="btn btn__secondary btn-first"> <FontAwesomeIcon icon={faEnvelope} className="mail" /><p>Hire Me</p></div>
                                </div>
                            </Col>

                            <Col className='bottom bottom3'>
                                <div className='socia-link'>
                                    <div class="wrap2">
                                        <div class="btn btn__secondary btn-second"><FontAwesomeIcon icon={faDownload} className="mail" /><p>Download CV</p></div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg='4' >
                        <div class="wrap3">
                            <div class="box3 four">
                                <img src='https://i.ibb.co/HzChfBH/image9-1-removebg-preview.png' className='my-img'/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;