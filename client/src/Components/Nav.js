import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="nav--wrapper">
      <div className="left-side--nav">
        <span>Book recommendation generator</span>
      </div>
      <div className="right-side--nav">
        <Link to="/"><button>HOME</button></Link>
        <Link to="/about"><button>ABOUT</button></Link>
      </div>
    </div>
  );
}

export default Nav;
