import React from 'react';
import { Link } from 'react-router-dom';


function ListBooks({moody, renderedBooks}) {

  
  
  
  const moodBooks = renderedBooks.filter(book => book.mood.includes(moody))
  const idList = moodBooks.map(book => book.book_id)
  console.log("this is the id list", idList)
  const randomId = idList[Math.floor(Math.random()*idList.length)];
  const theChosenBook = renderedBooks.find(book => book.book_id === randomId);
  console.log(theChosenBook)
  

  return (
    <div className="intro--container book-div">
      <div className="inner--div">
        <div className="image--div">
        </div>
      <span className="book-span">If you're feeling {moody},</span><br></br>
      <span className="book-span">We recommend..</span>
      <h1>{theChosenBook.title}</h1>
      <h4>{theChosenBook.author}, {theChosenBook.year}</h4>
      <p>{theChosenBook.description}</p>
      <Link to="/"><button className="b-main b-cat">Try Again</button></Link>
      </div>
    </div>
  )}

export default ListBooks;
