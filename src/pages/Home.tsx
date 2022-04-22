import React from 'react';
import {Link} from 'react-router-dom';
import MainHeader from '../shared/components/Navigation/MainHeader';

const HomePage = () => {
  return (
    <div className='background-home'>
      <MainHeader />
      <main>
        <div className='home-section'>
          <div className='d-flex flex-row justify-content-around align-items-end'>
            <div className='col-4'>
              <h5 className='heading-4 text-secondary'>SO, YOU WANT TO TRAVEL TO SPACE</h5>
              <h1 className='heading-1 text-light'>SPACE</h1>
              <p className='text-secondary body-text'>
                Let’s face it; if you want to go to space,
                you might as well genuinely go to outer space
                and not hover kind of on the edge of it.
                Well sit back, and relax because
                we’ll give you a truly out of this world experience!
              </p>
            </div>
            <div className='col-3 h-50'>
              <Link to="/destination">
                <button type="button" className="btn btn-light btn-circle btn-lg w-75 h-100">
                  <span className='button-1'>Explore</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
