import { faFacebookF, faLinkedin, faNode, faNodeJs, faReact, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Blogs from '../Blogs/Blogs';
import Clients from '../Clients/Clients';
import Contact from '../Contact/Contact';
import Feature from '../Feature/Feature';
import Home from '../Home/Home';
import Portfolio from '../Portfolio/Portfolio';
import Resume from '../Resume/Resume';
import './MainPage.css'


const MainPage = () => {


    return (
        <div className='MainPage' id='MainPage'>
           <Home />
           <Feature />
           <Portfolio />
           <Resume />
           <Clients />
           <Blogs />
           <Contact />
        </div>
    );
};

export default MainPage;