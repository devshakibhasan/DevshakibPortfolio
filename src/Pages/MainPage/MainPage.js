import React from 'react';
import Blogs from '../Blogs/Blogs';
import Clients from '../Clients/Clients';
import Contact from '../Contact/Contact';
import Feature from '../Feature/Feature';
import Home from '../Home/Home';
import Portfolio from '../Portfolio/Portfolio';
import './MainPage.css'


const MainPage = () => {


    return (
        <div className='MainPage' id='MainPage'>
          <Home />
          <Feature />
          <Portfolio />
        <Clients />
          <Blogs />
          <Contact />
        </div>
    );
};

export default MainPage;