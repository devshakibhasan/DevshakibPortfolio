
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../Shared/NotFound/NotFound';
import Education from './Education/Education';
import Skills from './Skills/Skills';
import './Resume.css'
import ResumeNavbar from './ResumeNavbar/ResumeNavbar';
const Resume = () => {
  return (
    <div id='resume' className='resume'>
      <div className='heading'>
        <p>3+ YEARS OF EXPERIENCE</p>
      </div>
      <div className='heading'>
        <h1>My Resume</h1>
      </div>
      <ResumeNavbar />

      <Routes>
        <Route  path="/education" element={ <Education /> }></Route>
        <Route  path="/education" element={ <Skills /> }></Route>
      </Routes>
    </div>
  );
};

export default Resume;