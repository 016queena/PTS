// Welcome.js
import React from 'react';
import './../styles/welcome.css';
import { ReactDOM } from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
   return (
    <div className='welcome-page'>
      <nav className='welcome-header'>
        <h1>Govt. Graduate College Jhelum</h1>
        <Link to="/components/login"> 
          <button className="signup-button">Login</button>
        </Link>
      </nav>

      <div className="welcome-container">
        <div className='college-logo'> </div>

        <div className="department-buttons">
          <div className="department-buttons1">
            <div className="department-button">
              <p>Department Of ECO</p>
              <button className='view-more-button'>View More</button>
            </div>
            <div className="department-button">
              <p>Department Of Chem</p>
              <button className='view-more-button' >View More</button>
            </div>
            <div className="department-button">
              <p>Department Of IT</p>
              <button className='view-more-button'>View More</button>
            </div>
          </div>
          <div className="department-buttons1">
            <div className="department-button">
              <p>Department Of Eng</p>
              <button className='view-more-button'>View More</button>
            </div>
            <div className="department-button">
              <p>Department Of Maths</p>
              <button className='view-more-button' >View More</button>
            </div>
            <div className="department-button">
              <p>Intermediate</p>
              <button className='view-more-button' >View More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
