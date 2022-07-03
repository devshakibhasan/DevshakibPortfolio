import React from 'react';
import Blogs from '../Blogs/Blogs';
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
          <Blogs />
          <Contact />
        </div>
    );
};

export default MainPage;