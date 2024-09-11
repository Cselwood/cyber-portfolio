import React from 'react';

import Navbar from './components/Navbar';
import Card from "./components/Card";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import Bio2 from "./components/Bio2";
import Jobs from "./components/Jobs";
import Projects from "./components/Projects";
import Blog from './components/Blog';
import Footer from "./components/Footer";

import './styles/App.css';

function App() {
  return (
    <div id="home" className="main prevent-select">

      <div className='medium-padding-bottom landing-background'>
        <Navbar/>
      </div>

      <div className='global-section medium-padding-top landing-background'>
        <Card/>
      </div>

      <div id="about" className='global-section-shallow medium-padding-top medium-padding-bottom bio-background'>
        <Bio/>
        <Bio2/>
        <Skills/>
      </div>

      <div id="jobs" className='global-section medium-padding-top medium-padding-bottom job-background'>
        <Jobs/>
      </div>

      <div id="projects" className='global-section medium-padding-top medium-padding-bottom projects-background'>
        <Projects/>
      </div>

      <div id="blog" className='global-section medium-padding-top blog-background'>
        <Blog/>
      </div>

      <div className='global-section small-padding-top small-padding-bottom footer-background'>
        <Footer/>
      </div>

    </div>
  );
}

export default App;
