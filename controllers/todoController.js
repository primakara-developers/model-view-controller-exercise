import TodoList from "../models/TodoList.js";
import TagTodo from "../models/TagTodo.js";

export default class TodoController {
  static async index(_, res) {
    const todos = await TodoList.find();
    const tags = await TagTodo.find();
    res.render("pages/index", { todos, tags });
  }

  static async createTodo(req, res) {
    try {
      if (req.body.title || req.body.description)
        await TodoList.create(
          req.body.tag,
          req.body.title,
          req.body.description
        );
      else {
        res.send("Lengkapin formnya dlu bro!");
      }
    } catch (err) {
      res.send(err);
    }
    res.redirect("/");
  }

  static async editTodo(req, res) {
    await TodoList.edit(
      req.body.id,
      req.body.tag,
      req.body.title,
      req.body.description
    );
    res.redirect("/");
  }

  static async deleteTodo(req, res) {
    console.log(req.body);
    await TodoList.delete(req.params.id);
    res.redirect("/");
  }
}
