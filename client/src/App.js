import React, {useState, useEffect} from "react";

// COMPONENTS
import Intro from "./Components/Intro";
import ListCategories from "./Components/ListCategories";
import ListMoods from "./Components/ListMoods";
import ListBooks from "./Components/ListBooks";
import About from "./Components/About";

// STYLESHEETS
import './styles/Intro.css'
import './styles/ListCategories.css'
import './styles/ListMoods.css'
import './styles/ListBooks.css'
import './styles/Nav.css'
import './styles/About.css'

import { 
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {

  const moodsObj = {
    "Unpleasant-Energized" : ["fearful", "angry"],
    "Unpleasant-Calm" : ["sad", "ominous"],
    "Pleasant-Energized" : ["cheerful", "humorous", "idylic", "adventurous"],
    "Pleasant-Calm" : ["hopeful", "whimsical", "reflective", "romantic"]
  } 

  const [renderedBooks, setRenderedBooks] = useState([]);
  const [category, setCategory] = useState("");
  const [moody, setMoody] = useState("");

  const getBooks = async() => {
    try {
      const response = await fetch("http://localhost:5000/books");
      const jsonData = await response.json();

      setRenderedBooks(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getBooks();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(category)
    console.log(moody)
  }

  const handleChange = e => {
    const target = e.target;
    if (target.checked) {
      setCategory(target.value);
    }
  }

  const handleMoodChange = e => {
    const target = e.target;
    if(target.checked) {
      setMoody(target.value)
    }
  }

  

  return (
    <div className="App">
    <Router >
      <Routes >
        <Route path = '/' exact element={<Intro/>} />
        <Route path = '/categories' exact element={<ListCategories handleChange={handleChange} category={category} handleSubmit={handleSubmit} setCategory={setCategory} />} />
        <Route path = '/moods' exact element={ category ? <ListMoods handleSubmit={handleSubmit} category={category} moodsObj={moodsObj} moody={moody} handleMoodChange={handleMoodChange} setMoody={setMoody}/> : <Intro/>} />
        <Route path = '/books' exact element={ category ? <ListBooks moody={moody} renderedBooks={renderedBooks} /> : <Intro/>} />
        <Route path = '/about' exact element={<About/>} />
      </Routes>

    </Router>

     
    </div>
  );
}

export default App;
