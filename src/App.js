import React, { useEffect, useRef, useState } from 'react';
import Card from "./components/Card";
import Bio from "./components/Bio";
import Jobs from "./components/Jobs";
import Blog from './components/Blog';
import Footer from "./components/Footer";

import useViewport from './hooks/useViewport';
import './styles/App.css';

function App() {
  const [contentHover, setContentHover] = useState(false);
  const [currentSection, setCurrentSection] = useState('');
  const contentRef = useRef(null);
  const firstSection = useRef(null);
  const secondSection = useRef(null);
  const thirdSection = useRef(null);
  const {width} = useViewport();

  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const deviceClass = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop';

  useEffect(() => {
    const handleScrolling = (event) => {
  if (contentRef.current && !contentHover) {
    contentRef.current.scrollTop += event.deltaY;
  }
};

    window.addEventListener("wheel", handleScrolling);

    return () => {
      window.removeEventListener("wheel", handleScrolling);
    };
  }, [contentHover]);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = contentRef.current.clientHeight;
      const viewportCenter = contentRef.current.scrollTop + viewportHeight / 2;
      const sections = [firstSection.current, secondSection.current, thirdSection.current];
      let newCurrentSection = '';

      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + contentRef.current.scrollTop;
          const sectionBottom = sectionTop + rect.height;

          if (viewportCenter >= sectionTop && viewportCenter < sectionBottom) {
            newCurrentSection = section.id;
          }
        }
      });

      setCurrentSection(newCurrentSection);
    };

    const contentElement = contentRef.current;
    contentElement.addEventListener('scroll', handleScroll);

    return () => {
      contentElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={deviceClass}>
      <div className="mainflex prevent-select">
        <div className="no-scroll">
          <Card currentSection={currentSection} />
        </div>
        <div
          className="scroll prevent-select"
          ref={contentRef}
          onMouseEnter={() => { setContentHover(true) }}
          onMouseLeave={() => { setContentHover(false) }}
        >
          <div id="about" ref={firstSection}>
            <Bio deviceClass={deviceClass} />
          </div>
          <div id="experience" ref={secondSection}>
            <Jobs deviceClass={deviceClass} />
          </div>
          <div id="blog" ref={thirdSection}> 
            <Blog deviceClass={deviceClass}/>
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
