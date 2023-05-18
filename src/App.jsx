import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const AnimeDetailsPage = lazy(() => import('./pages/AnimeDetailsPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const IntroPage = lazy(() => import('./pages/IntroPage'));
const PopularPage = lazy(() => import('./pages/PopularPage'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const Page404 = lazy(() => import('./pages/Page404'));

import Loading from './components/Loading/Loading';

const App = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<IntroPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/most-popular' element={<PopularPage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/anime/:animeID' element={<AnimeDetailsPage />} />
          <Route path='/*' element={<Page404 />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
