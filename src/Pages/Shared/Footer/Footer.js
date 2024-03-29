
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './Footer.css'

import { Nav, Navbar, Button, Container, NavDropdown, Offcanvas, Tabs, Tab, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowTrendUp, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
    return (
        <div id='Footer' className='Footer'>
            <Container className='Footer-container'>
                <div className='footer-image'>

                    <img src="https://i.ibb.co/FY2pXPz/Screenshot-62.png" alt="" />
                    <h3>Shakib Hasan</h3>
                </div>
                <p>© 2022 All rights reserved by Shakib Hasan</p>
            </Container>
        </div>
    );
};

export default Footer;