import TodoList from "../models/TodoList.js";
import TagTodo from "../models/TagTodo.js";

export default class TodoController {
  static async getTodo(_, res) {
    const todos = await TodoList.find();
    res.json({ status: 200, data: todos });
  }

  static async createTodo(req, res) {
    console.log(req.body);
    try {
      if (req.body.title) {
        await TodoList.create(
          req.body.tag,
          req.body.title,
          req.body.description
        );
      } else {
        res.send("Title tidak boleh kosong!");
      }
    } catch (err) {
      res.send(err);
    }
    res.json({ status: 201, message: "success" });
  }

  static async updateTodo(req, res) {
    try {
      if (req.body.title !== "") {
        await TodoList.edit(
          req.params.id,
          req.body.tag,
          req.body.title,
          req.body.description
        );
      } else {
        res.send("Title tidak boleh kosong!");
      }
    } catch (err) {
      res.send(err);
    }
    res.json({ status: 200, message: "success" });
  }

  static async deleteTodo(req, res) {
    await TodoList.delete(req.params.id);
    res.json({ status: 200, message: "success" });
  }
}
