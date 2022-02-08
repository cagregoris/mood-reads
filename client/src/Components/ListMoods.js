import React from 'react';
import { Link } from 'react-router-dom';

function ListMoods({ handleSubmit, handleMoodChange, category, moodsObj, moody }) {
  return (
    <div>
      <h1>LIST MOODS</h1>
      <form onSubmit={handleSubmit}>
        {
          category ? moodsObj[category].map(mood => (
            <div>
              
            <input type="radio" value={mood} checked={moody === mood} onChange={handleMoodChange}/>
            <label for={mood}>{mood}</label>

            </div>
          )) : <div></div>
        }
        <Link to="/books"><button type="submit">Submit</button></Link>
        </form>
    </div>
  );
}

export default ListMoods;
