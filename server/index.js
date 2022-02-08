const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db/db")

//middleware

app.use(express.json()); //req.body
app.use(cors());

//ROUTES

//Create a book

app.post("/books", async(req, res) => {
  try {
    const { title, author, year, description, category, mood } = req.body;

    const newBook = await pool.query(
      "INSERT INTO books (title, author, year, description, category, mood) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [title, author, year, description, category, mood]
    );

    res.json(newBook.rows[0]);

  } catch (err) {
    console.error(err.message);
  }
});


//get all unpleasant-energized books

app.get("/books", async(req, res) => {
  try {

    const allBooks = await pool.query("select * from books")

    res.json(allBooks.rows);

  } catch (err) {
    console.error(err.message);
  }
})



app.listen(5000, () => {
  console.log("server is running on port 5000 😎");
});