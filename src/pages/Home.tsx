import React from 'react';
import MainHeader from '../shared/components/Navigation/MainHeader';

const HomePage = () => {
	return (
		<div className='background-home'>
			<MainHeader />
			<main>
				<div className='container home-section'>
					<div className='row align-items-end justify-content-between'>
						<div className='col-4'>
							<h5 className='heading-5 text-secondary'>SO, YOU WANT TO TRAVEL TO SPACE</h5>
							<h1 className='heading-1 text-light'>SPACE</h1>
							<p className='text-secondary body-text'>
								Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
							</p>
						</div>
						<div className='col-3'>
							<p className='text-light'>Teste</p>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default HomePage;
