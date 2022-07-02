import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import React, { Component }  from 'react';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

import MainPage from './Pages/MainPage/MainPage';



function App() {
  return (
    <div className='app'>
      <Header></Header>

      <Routes>
        <Route path="/" element={<MainPage />} >
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
