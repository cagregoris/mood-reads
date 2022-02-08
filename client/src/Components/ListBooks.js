import React from 'react';


function ListBooks({moody, renderedBooks}) {

  
    const moodBooks = renderedBooks.filter(book => book.mood.includes(moody))
    const idList = moodBooks.map(book => book.book_id)
    console.log("this is the id list", idList)
    const randomId = idList[Math.floor(Math.random()*idList.length)];
    const theChosenBook = renderedBooks.find(book => book.book_id === randomId);
    console.log(theChosenBook)
  

  return (
    <div>
      <h1>RANDOM BOOK! :)</h1>
      <h2>{theChosenBook.title}</h2>
      <h4>{theChosenBook.author}, {theChosenBook.year}</h4>
      <p>{theChosenBook.description}</p>
    </div>
  )}

export default ListBooks;
