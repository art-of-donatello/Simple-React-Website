import React from 'react'
import {useState,useEffect} from 'react'

function Scroll() {

    const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    console.log(position);
  };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);





  return (
    <div></div>
  )
}

export default Scroll