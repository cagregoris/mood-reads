import React from 'react';
import Nav from './Nav';

import sylvia from '../images/sylvia.jpeg'

function About() {
  return (
    <div className="page--wrapper">
      <Nav/>
      <div className="about--container">
        <div className="left-side--about">
          <div className="img-div" id="sylvia-img">
            <img src={sylvia} alt="Sylvia Plath Reading" />
          </div>
        </div>
        <div className="right-side--about">
          <h3>About MoodReads</h3>
          <p>
            My love for reading inspired me to create this app. There are many tools designed to help find a book to read - for example, the GoodReads app which I rely on heaily. While these resources are good for finding books based on genre or titles similar to those you have already read, they lack a personal, and less-specific element. Sometimes you are looking for a book that matches a certain 'vibe'. MoodReads recreates the experience of asking for book recommendations from a well-read friend. Instead of searching for a book by genre, our app enables you to find a new read by emotion. 
          </p>
          <div className="abt">
            <h4>Created by:</h4>
            <div className="github--link">
              <span>Carolyn Gregoris</span>
              <a href="https://github.com/cascobie" target="_blank"><i className="devicon-github-original"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
