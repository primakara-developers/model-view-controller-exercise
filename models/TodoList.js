import connector from "../db/connector.js";
import { v4 as uuidv4 } from 'uuid';
const db = await connector();
const table = "Todos";

export default class TodoList {
  static async create(tag_id, title, description) {
    const sql = `
			INSERT INTO Todos(id, tag_id, title, description)
			VALUES ("${uuidv4()}", "${tag_id}", "${title}", "${description}")
		`;
		const [rows] = await db.execute(sql);
		return rows
  }

  static edit() {}

  static delete() {}

  static async find() {
    const sql = `SELECT * FROM ${table}`;
    const [rows] = await db.execute(sql);
    return rows;
  }

  static async findOneById(value) {
    const sql = `SELECT * FROM ${table} WHERE id = "${value}"`;
    const [rows] = await db.execute(sql);
    return rows.length === 0 ? null : rows[0];
  }

  static async search(field, value) {
    const sql = `SELECT * FROM ${table} WHERE ${field} LIKE '%${value}%'`;
    const [rows] = await db.execute(sql);
    return rows;
  }
}
