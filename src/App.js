import React, { useEffect, useRef, useState } from 'react';
import Card from "./components/Card";
import Bio from "./components/Bio";
import Jobs from "./components/Jobs";
import './styles/App.css';

function App() {

  const [contentHover, setContentHover] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {

    const handleScrolling = (event) => {
      if(contentRef !== null) {
        if(contentHover === false) {
          contentRef.current.scrollTop += event.deltaY;
        }
      }
    }

    window.addEventListener("wheel", handleScrolling);

    return () => {
      window.removeEventListener("wheel", handleScrolling);
    }

  })

  return (
    <div>
      <div className="mainflex">
        <div className="no-scroll">
          <Card />
        </div>
        <div  className="scroll" ref={contentRef}
              onMouseEnter={ () => { setContentHover(true) }}
              onMouseLeave={ () => { setContentHover(false) }} >
          <Bio />
          <Jobs />
        </div>
      </div>
    </div>
  );
}

export default App;
