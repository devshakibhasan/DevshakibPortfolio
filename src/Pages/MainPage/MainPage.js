import React from 'react';
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
        </div>
    );
};

export default MainPage;