import React, { useEffect, useState } from 'react';

function SinglePage() {

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

    const displayBook = function(bookList) {
      const moodBooks = bookList.filter(book => book.mood.includes(moody))
      const idList = moodBooks.map(book => book.book_id)
      console.log("this is the id list", idList)
      let randomId = idList[Math.floor(Math.random()*idList.length)];
      let theChosenBook = bookList.find(book => book.book_id === randomId);

      return theChosenBook;
      
    }

    

 

  return (
    <div>
      <h1>SINGLE PAGE TEST</h1>

      <form onSubmit={handleSubmit}>
        <input type="radio" value="UE" checked={category === "UE"} onChange={handleChange}/>
        <label for="UE">Unpleasant-Energized</label>

        <input type="radio" value="UC" checked={category === "UC"} onChange={handleChange}/>
        <label for="UC">Unpleasant-Calm</label>

        <input type="radio" value="PE" checked={category === "PE"} onChange={handleChange}/>
        <label for="PE">Pleasant-Energized</label>

        <input type="radio" value="PC" checked={category === "PC"} onChange={handleChange}/>
        <label for="PC">Pleasant-Calm</label>

        <button type="submit">Submit</button>
      </form>

      <div>
      <form onSubmit={handleSubmit}>
        {
          category ? moodsObj[category].map(mood => (
            <div>
              
            <input type="radio" value={mood} checked={moody === mood} onChange={handleMoodChange}/>
            <label for={mood}>{mood}</label>

            </div>
          )) : <div></div>
        }
        <button type="submit">Submit</button>
        </form>
      </div>


        <div>
        {renderedBooks.filter(book => book.mood.includes(moody)).map(filteredBook => {
        return (
          <h2>{filteredBook.title}</h2>
        )
      })}
        </div>

        <div>
          <h1>RANDOM BOOK! :)</h1>
          <h2>{(displayBook(renderedBooks).title)}</h2>
        </div>

      


    </div>
  )}

export default SinglePage;
