import React from 'react';
import { Link } from 'react-router-dom';
import imgObj from '../helpers/helpers';
import Nav from './Nav';



function ListBooks({moody, renderedBooks}) {

  const moodBooks = renderedBooks.filter(book => book.mood.includes(moody))
  console.log("moodbooks", moodBooks)
  const idList = moodBooks.map(book => book.book_id)
  console.log("this is the id list", idList)
  const randomId = idList[Math.floor(Math.random()*idList.length)];
  console.log(randomId)
  const theChosenBook = moodBooks.find(book => book.book_id === randomId);
  console.log(randomId)

  console.log("CHOSEN", theChosenBook)

  console.log("TEST!!!!->>>", imgObj[theChosenBook.book_id].fileName)

  const chosenImage = imgObj[theChosenBook.book_id].fileName;
  

  return (
    <div className="div--wrapper">
      <Nav />
      <div className="intro--container book-div">
        <div className="inner--div">
          <div className="img-div">
            <img src={chosenImage} alt={theChosenBook.title} />
          </div>
        <span className="book-span">If you're feeling {moody},</span><br></br>
        <span className="book-span">We recommend..</span>
        <h1>{theChosenBook.title}</h1>
        <h4>{theChosenBook.author}, {theChosenBook.year}</h4>
        <p>{theChosenBook.description}</p>
        <Link to="/"><button className="b-main b-cat">Try Again</button></Link>
        </div>
      </div>
    </div>
  )}

export default ListBooks;
