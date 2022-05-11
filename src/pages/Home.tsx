import React from 'react';
import {Link} from 'react-router-dom';
import MainHeader from '../shared/components/Navigation/MainHeader';
import TextBlock from '../shared/components/Text-Block/TextBlock';

const HomePage = () => {
  return (
    <div className='background-home'>
      <MainHeader />
      <main>
        <div className='d-flex justify-content-around align-items-center h-100'>
          <TextBlock
            header={<h5 className='heading-4 text-secondary'>SO, YOU WANT TO TRAVEL TO SPACE</h5>}
            title='SPACE'
            description="Let’s face it; if you want to go to space,
                        you might as well genuinely go to outer space
                        and not hover kind of on the edge of it.
                        Well sit back, and relax because
                        we’ll give you a truly out of this world experience!"
          />
          <div className='d-flex w-25 h-50'>
            <Link className='flex-fill' to="/destination">
              <button type="button" className="w-75 h-100 btn btn-light btn-circle btn-xl">
                <span className='button-1'>Explore</span>
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
