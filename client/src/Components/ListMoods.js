import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from './BackButton';
import Nav from './Nav';

function ListMoods({ handleSubmit, category, moodsObj, setMoody }) {
  return (
    <div className="page--wrapper">
      <Nav />
      <div className="page--div">
          <Link to="/categories"><BackButton/></Link>
        <div className="intro--container categories--container">
          <span id="mood-span">STEP 2 - {category}</span>
          <h1>I'm Feeling...</h1>
          <form className="categories--form" onSubmit={handleSubmit}>
            {
              category ? moodsObj[category].map(mood => (
                <div>
                <Link to="/books"><button className="b-main b-cat" type="submit" onClick={() => setMoody(mood)}>{mood}</button></Link>
                </div>
              )) : <div></div>
            }

            </form>
        </div>
      </div>
    </div>
  );
}

export default ListMoods;
