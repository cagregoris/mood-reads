import React from 'react';
import { Link } from 'react-router-dom';

function Intro() {
  return (
    <div className="intro--container intro-div">
      <h1>MOOD READS</h1>
      <span id="intro-span">Book recommendation generator</span>
      <Link to="/categories"><button className="b-main">
        start
      </button></Link>
     
    </div>
  );
}

export default Intro;