import React, { useState } from 'react';
import MainHeader from '../shared/components/Navigation/MainHeader';
import moon from '../assets/images/image-moon.png'

const DestinationPage = () => {
	const [destination, setDestination] = useState('moon');

	return (
		<div className='background-destination'>
			<MainHeader />
			<main>
				<div className='destination-section'>
						<div>
							<p className='heading-5 text-light'><span>01</span> PICK YOUR DESTINATION </p>
							<img src={moon}></img>
						</div>
						<div className='col-4'>
							<div className='d-flex flex-row'>
								<button onClick={() => setDestination('moon')} type="button"
									className={`btn text-secondary btn-destinations ${(destination === 'moon') ? "btn-destinations-active" : ""} heading-3`}>
										MOON
								</button>
								<button onClick={() => setDestination('mars')} type="button"
									className={`btn text-secondary btn-destinations ${(destination === 'mars') ? "btn-destinations-active" : ""} heading-3`}>
										MARS
								</button>
								<button onClick={() => setDestination('europa')} type="button"
									className={`btn text-secondary btn-destinations ${(destination === 'europa') ? "btn-destinations-active" : ""} heading-3`}>
										EUROPA
								</button>
								<button onClick={() => setDestination('titan')} type="button"
									className={`btn text-secondary btn-destinations ${(destination === 'titan') ? "btn-destinations-active" : ""} heading-3`}>
										TITAN
								</button>
							</div>
							<h1 className='heading-1 text-light'>MOON</h1>
							<p className='text-secondary body-text'>
								See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
							</p>
							<hr />
							<div className='d-flex flex-row'>
								<div className='col'>
									<p className='text-secondary subheading-2'>AVG.DISTANCE</p>
									<p className='text-light subheading-1'>384,400 KM</p>
								</div>
								<div className='col'>
									<p className='text-secondary subheading-2'>EST. TRAVEL TIME</p>
									<p className='text-light subheading-1'>3 DAYS</p>
								</div>
							</div>
						</div>
				</div>
			</main>
		</div>
	);
}

export default DestinationPage;
