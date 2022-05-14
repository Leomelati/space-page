import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CrewPage from './pages/Crew';
import DestinationPage from './pages/destination/Destination';
import HomePage from './pages/home/Home';
import TechnologyPage from './pages/Technology';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='destination' element={<DestinationPage />} />
        <Route path='crew' element={<CrewPage />} />
        <Route path='technology' element={<TechnologyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
