import React from 'react';
import { Link } from 'react-router-dom';

function Intro() {
  return (
    <div>
      <h1>INTRO PAGE</h1>
      <Link to="/categories">start</Link>
    </div>
  );
}

export default Intro;