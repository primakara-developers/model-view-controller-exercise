import TodoList from "../models/TodoList.js";
import TagTodo from "../models/TagTodo.js";

export default class TodoController {
  static async index(_, res) {
    const todos = await TodoList.find();
    const tags = await TagTodo.find();
    res.render("pages/index", { todos, tags });
  }

  static async addPage(_, res) {
    const tags = await TagTodo.find();
    res.render("pages/add", { tags });
  }

  static async createTodo(req, res) {
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
    res.redirect("/");
  }

  static async editPage(req, res) {
    const tags = await TagTodo.find();
    try {
      const selectedTodo = await TodoList.findOneById(req.params.id);
      res.render("pages/edit", { selectedTodo, tags });
    } catch (err) {
      res.send("Data yang dipilih tidak ada!");
    }
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
    res.redirect("/");
  }

  static async deleteTodo(req, res) {
    await TodoList.delete(req.params.id);
    res.redirect("/");
  }
}
