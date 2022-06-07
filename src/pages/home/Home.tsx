import React from 'react';
import {Link} from 'react-router-dom';
import MainHeader from '../../shared/components/Navigation/MainHeader';
import TextBlock from '../../shared/components/Text-Block/TextBlock';

const HomePage = () => {
  return (
    <div className='background-home'>
      <MainHeader />
      <main>
        <div className='home-segment'>
          <TextBlock
            header={<h5 className='heading-4 text-secondary'>SO, YOU WANT TO TRAVEL TO SPACE</h5>}
            title='SPACE'
            description="Let’s face it; if you want to go to space,
                        you might as well genuinely go to outer space
                        and not hover kind of on the edge of it.
                        Well sit back, and relax because
                        we’ll give you a truly out of this world experience!"
          />
          <Link className="btn-home" to="/destination">
            <button type="button" className="btn btn-light btn-circle btn-xl">
              <span className='button-1'>Explore</span>
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
