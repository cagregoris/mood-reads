import React from 'react';
import { Link } from 'react-router-dom';

function ListMoods({ handleSubmit, handleMoodChange, category, moodsObj, moody, setMoody }) {
  return (
    <div className="intro--container">
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
  );
}

export default ListMoods;
