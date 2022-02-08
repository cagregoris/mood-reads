import React from 'react';
import { Link } from 'react-router-dom';

function ListCategories({handleChange, handleSubmit, category}) {
  return (
    <div>
      <h1>List Categories</h1>
      <form onSubmit={handleSubmit}>
        <input type="radio" value="UE" checked={category === "UE"} onChange={handleChange}/>
        <label for="UE">Unpleasant-Energized</label>

        <input type="radio" value="UC" checked={category === "UC"} onChange={handleChange}/>
        <label for="UC">Unpleasant-Calm</label>

        <input type="radio" value="PE" checked={category === "PE"} onChange={handleChange}/>
        <label for="PE">Pleasant-Energized</label>

        <input type="radio" value="PC" checked={category === "PC"} onChange={handleChange}/>
        <label for="PC">Pleasant-Calm</label>

        <Link to="/moods"><button type="submit">Submit</button></Link>
      </form>
    </div>
  )
}

export default ListCategories;
