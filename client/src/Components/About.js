import React from 'react';
import Nav from './Nav';

import sylvia from '../images/sylvia.jpeg'

function About() {
  return (
    <div className="page--wrapper">
      <Nav/>
      <div className="about--container">
        <div className="left-side--about">
          <div className="img-div">
            <img src={sylvia} alt="Sylvia Plath Reading" />
          </div>
        </div>
        <div className="right-side--about">

        </div>
      </div>
    </div>
  );
}

export default About;
