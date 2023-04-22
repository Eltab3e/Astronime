import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Anime from './pages/Anime';
import Home from './pages/Home';
import Intro from './pages/Intro';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/home' element={<Home />} />
        <Route path='/anime/:id' element={<Anime />} />
      </Routes>
    </>
  );
};

export default App;
