import React from 'react';
import MainHeader from '../shared/components/Navigation/MainHeader';

const HomePage = () => {
  return (
		<div className='background-home'>
			<MainHeader />
			<p className='text-light'>Home page</p>
		</div>
  );
}

export default HomePage;
