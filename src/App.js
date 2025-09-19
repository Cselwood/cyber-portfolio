import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Card from "./components/Card";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import Bio2 from "./components/Bio2";
import Jobs from "./components/Jobs";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import './styles/App.css';

function MainPage() {
  return (
    <div id="home" className="main">

      <div className='medium-padding-bottom'>
        <Navbar/>
      </div>

      <div className='global-section large-padding-top'>
        <Card/>
      </div>

    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
