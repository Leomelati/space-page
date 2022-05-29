import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CrewPage from './pages/Crew';
import DestinationPage from './pages/destination/Destination';
import HomeDesktop from './pages/home/Home-Desktop';
import HomeMobile from './pages/home/Home-Mobile';
import TechnologyPage from './pages/Technology';
import useWindowDimensions from './shared/hooks/window-dimensions';

const App = () => {
  const {width} = useWindowDimensions();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {width > 769 ? (
            <React.Fragment>
              <Route path='/' element={<HomeDesktop />} />
              <Route path='destination' element={<DestinationPage />} />
              <Route path='crew' element={<CrewPage />} />
              <Route path='technology' element={<TechnologyPage />} />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Route path='/' element={<HomeMobile />} />
              <Route path='destination' element={<DestinationPage />} />
              <Route path='crew' element={<CrewPage />} />
              <Route path='technology' element={<TechnologyPage />} />
            </React.Fragment>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
