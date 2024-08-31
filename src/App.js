import React, { useEffect, useRef, useState } from 'react';
import Card from "./components/Card";
import Bio from "./components/Bio";
import Jobs from "./components/Jobs";
import Projects from "./components/Projects";
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
  const fourthSection = useRef(null);
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
      const sections = [firstSection.current, secondSection.current, thirdSection.current, fourthSection.current];
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
      <div className="main prevent-select">
        <div className="prevent-select global-padding-margin "
          ref={contentRef}
          onMouseEnter={() => { setContentHover(true) }}
          onMouseLeave={() => { setContentHover(false) }}>

            <div className='global-section global-section-first medium-padding-bottom landing-background'>
              <div>
                <Card currentSection={currentSection} />
              </div>
            </div>

            <div className='global-section medium-padding-top medium-padding-bottom bio-background'>
              <div id="about" ref={firstSection}>
                <Bio deviceClass={deviceClass} />
              </div>
            </div>

            <div className='global-section medium-padding-top medium-padding-bottom job-background'>
              <Jobs deviceClass={deviceClass} ref={secondSection} />
            </div>

            <div className='global-section medium-padding-top medium-padding-bottom projects-background'>
              <Projects deviceClass={deviceClass} ref={thirdSection} />
            </div>

            <div className='global-section medium-padding-top medium-padding-bottom blog-background'>
              <div id="blog" ref={fourthSection}> 
                <Blog deviceClass={deviceClass}/>
              </div>
            </div>

            <div className='global-section medium-padding-top medium-padding-bottom footer-background'>
              <div>
                <Footer/>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
