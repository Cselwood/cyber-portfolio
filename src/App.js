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

      <div className='global-section medium-padding-top'>
        <Card/>
      </div>

      <div id="about" className='global-section medium-padding-top medium-padding-bottom'>
        <Bio/>
        <Bio2/>
        <Skills/>
      </div>

      <div id="jobs" className='global-section medium-padding-bottom'>
        <Jobs/>
      </div>

      <div id="projects" className='global-section medium-padding-top medium-padding-bottom'>
        <Projects/>
      </div>

      <div className='global-section small-padding-top small-padding-bottom'>
        <Footer/>
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
