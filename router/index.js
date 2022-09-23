const express = require("express");
const router = express.Router();

import TodoController from "./controllers/todoController";

router.get("/todo", TodoController.getTodo);
router.post("/todo/add", TodoController.createTodo);
router.put("/todo/edit/:id", TodoController.updateTodo);
router.delete("/todo/delete/:id", TodoController.deleteTodo);

export default router;
