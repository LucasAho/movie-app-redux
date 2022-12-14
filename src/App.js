import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.scss';
import Home from './components/Home/Home.js';
import Header from './components/Header/Header';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div className='container'>
          <Routes>
            <Route exact path="/" element={<Home />}>
            </Route>
            <Route path='/movie/:imdbID' element={<MovieDetail />}>
            </Route>
            <Route path='*' element={<PageNotFound />}>
            </Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
