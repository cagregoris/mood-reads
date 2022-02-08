import React, {useState, useEffect} from "react";

import Intro from "./Components/Intro";
import ListCategories from "./Components/ListCategories";
import ListMoods from "./Components/ListMoods";
import ListBooks from "./Components/ListBooks";
import SinglePage from "./Components/SinglePage";

import { 
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {

  const moodsObj = {
    "UE" : ["fearful", "angry"],
    "UC" : ["sad", "ominous"],
    "PE" : ["cheerful", "humorous", "idylic", "adventurous"],
    "PC" : ["hopeful", "whimsical", "reflective", "romantic"]
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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(category)
    console.log(moody)
  }

  // const displayBook = function() {
  //   const moodBooks = renderedBooks.filter(book => book.mood.includes(moody))
  //   const idList = moodBooks.map(book => book.book_id)
  //   console.log("this is the id list", idList)
  //   const randomId = idList[Math.floor(Math.random()*idList.length)];
  //   const theChosenBook = renderedBooks.find(book => book.book_id === randomId);
  //   console.log("THE CHOSEN BOOK", theChosenBook)
  //   let newArray = [];
  //   newArray.push(theChosenBook.title, theChosenBook.author, theChosenBook.year, theChosenBook.description)

  //   return newArray;
    
  // }
  

  return (
    <div className="App">
    <Router >
      <Routes >
        <Route path = '/' exact element={<Intro/>} />
        <Route path = '/categories' exact element={<ListCategories handleChange={handleChange} category={category} handleSubmit={handleSubmit} />} />
        <Route path = '/moods' exact element={ category ? <ListMoods handleSubmit={handleSubmit} category={category} moodsObj={moodsObj} moody={moody} handleMoodChange={handleMoodChange} /> : <Intro/>} />
        <Route path = '/books' exact element={ category ? <ListBooks moody={moody} renderedBooks={renderedBooks} /> : <Intro/>} />
      </Routes>

    </Router>

     
    </div>
  );
}

export default App;
