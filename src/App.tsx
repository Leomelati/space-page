import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CrewPage from './pages/Crew';
import DestinationPage from './pages/Destination';
import HomePage from './pages/Home';
import TechnologyPage from './pages/Technology';
import MainHeader from './shared/components/Navigation/MainHeader';

const App = () => {
	return (
		<BrowserRouter>
			<header>
				<MainHeader />
			</header>
			<main>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='destination' element={<DestinationPage />} />
					<Route path='crew' element={<CrewPage />} />
					<Route path='technology' element={<TechnologyPage />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
