
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../Shared/NotFound/NotFound';
import './Blogs.css'

import { Nav, Navbar, Button, Container, NavDropdown, Offcanvas, Tabs, Tab, Row, Col } from 'react-bootstrap';

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
                
            </Container>
        </div>
    );
};

export default Blogs;