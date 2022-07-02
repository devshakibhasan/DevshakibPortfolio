import React from 'react';
import Home from '../Home/Home';
import Portfolio from '../Portfolio/Portfolio';
import './MainPage.css'


const MainPage = () => {


    return (
        <div className='MainPage' id='MainPage'>
          <Home />
          <Portfolio />
        </div>
    );
};

export default MainPage;