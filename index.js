import "dotenv/config";
import express from "express";
import TodoController from "./controllers/todoController.js";

const app = express();

app.use(express.urlencoded({ extended: false }));

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index/todos page
app.get("/", TodoController.index);
app.post("/add", TodoController.createTodo);
app.get("/delete/:id", TodoController.deleteTodo);

// about page
app.get("/about", function (req, res) {
  res.render("pages/about");
});

app.listen(process.env.PORT);
console.log(`Server is listening on port ${process.env.PORT}`);
