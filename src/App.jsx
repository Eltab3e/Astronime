import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Anime from './pages/Anime';
import Home from './pages/Home';
import Intro from './pages/Intro';
import MostPopular from './pages/MostPopular';
import AnimeRecommendations from './pages/AnimeRecommendations';
import About from './pages/About';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/home' element={<Home />} />
        <Route path='/most-popular' element={<MostPopular />} />
        <Route
          path='/anime-recommendations'
          element={<AnimeRecommendations />}
        />
        <Route path='/about' element={<About />} />
        <Route path='/anime/:id' element={<Anime />} />
      </Routes>
    </>
  );
};

export default App;
