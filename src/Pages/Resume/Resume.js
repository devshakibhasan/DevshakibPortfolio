
import React from 'react';
import Education from './Education/Education';
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
            <Education />
        </div>
    );
};

export default Resume;