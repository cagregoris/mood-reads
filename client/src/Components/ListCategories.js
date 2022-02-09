import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

function ListCategories({handleSubmit, setCategory}) {
  
  return (
    <div className="page--wrapper">
      <Nav/>
      <div className="intro--container categories--container">
        <span id="cat-span">STEP ONE</span>
        <h1>I'm Feeling...</h1>
        <form className="categories--form" onSubmit={handleSubmit}>
          <Link to="/moods"><button className="b-main b-cat" type="submit" onClick={() => setCategory("Unpleasant-Energized")}>Unpleasant-Energized</button></Link>
          <Link to="/moods"><button className="b-main b-cat" type="submit" onClick={() => setCategory("Pleasant-Energized")}>Pleasant-Energized</button></Link>
          <Link to="/moods"><button className="b-main b-cat" type="submit" onClick={() => setCategory("Unpleasant-Calm")}>Unpleasant-Calm</button></Link>
          <Link to="/moods"><button className="b-main b-cat" type="submit" onClick={() => setCategory("Pleasant-Calm")}>Pleasant-Calm</button></Link>
        </form>
      </div>
    </div>
  )
}

export default ListCategories;
