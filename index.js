import "dotenv/config";
import express from "express";
import TodoController from "./controllers/todoController.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// index/todos page
app.get("/todo", TodoController.getTodo);
app.post("/todo/add", TodoController.createTodo);
app.put("/todo/edit/:id", TodoController.updateTodo);
app.delete("/todo/delete/:id", TodoController.deleteTodo);

// about page
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(process.env.PORT);
console.log(`Server is listening on port ${process.env.PORT}`);
