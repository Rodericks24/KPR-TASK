import React from 'react';
import MovieListing from '../src/components/movielisting';
import AddMovieForm from '../src/components/addMovieForm';
import Navbars from '../src/components/navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
    <Navbars/>
      <Router>
        <Routes>
          <Route path="/add" element={<AddMovieForm />} />
          <Route path="/" element={<MovieListing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

