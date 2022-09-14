import connector from "../db/connector.js";

const db = await connector();
const table = "Tags";

export default class TagTodo {
  static async find() {
    const sql = `SELECT * FROM ${table}`;
    const [rows] = await db.execute(sql);
    return rows;
  }

  static async tagsFilter(value) {
    const sql = `
      SELECT * FROM ${table} 
      INNER JOIN Todos
      ON Tags.id = Todos.tag_id
      WHERE Tags.id = ${value}
    `;
    const [rows] = await db.execute(sql);
    return rows;
  }
}
