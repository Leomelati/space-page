import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {ReactComponent as Logo} from '../../../assets/images/logo.svg';

const MainHeader = () => {
  const location = useLocation();

  return (
    <header>
      <div className="container" id="nav-container">
        <nav className="navbar navbar-expand-lg fixed-top">
          <Link className='navbar-brand' data-alt="Space tourism" to="/"><Logo /></Link>
          <button type='button' className='navbar-toggler'
            data-toggle='collapse' data-target='#navbar-links'
            aria-controls='navbar-links' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse justify-content-end' id='navbar-links'>
            <div className='navbar-nav'>
              <Link className={`nav-item nav-link nav-text
                ${(location.pathname === '/') ? 'nav-item-active' : ''}`}
              to='/'>00 HOME
              </Link>
              <Link className={`nav-item nav-link nav-text
                ${(location.pathname === '/destination') ? 'nav-item-active' : ''}`}
              to='/destination'>01 DESTINATIONS
              </Link>
              <Link className={`nav-item nav-link nav-text
                ${(location.pathname === '/crew') ? 'nav-item-active' : ''}`}
              to='/crew'>02 CREW
              </Link>
              <Link className={`nav-item nav-link nav-text
                ${(location.pathname === '/technology') ? 'nav-item-active' : ''}`}
              to='/technology'>03 TECHNOLOGY
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;
