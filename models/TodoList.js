import connector from "../db/connector.js";
import { v4 as uuidv4 } from 'uuid';
const db = await connector();
const table = "Todos";

export default class TodoList {
  static async create(data) {
    const sql = `
			INSERT INTO Todos(id, tag_id, title, description)
			VALUES ("${uuidv4()}", "${data.tag_id}", "${data.title}", "${data.description}")
		`;
		const [rows] = await db.execute(sql);
		return rows
  }

  static async edit(newData) {
		const sql = `
      UPDATE ${table} SET title = "${newData.title}", description = "${newData.description}",
      tag_id = "${newData.tag_id}" WHERE id = "${newData.id}"
    `;
    const [rows] = await db.execute(sql);
		return rows;
	}

	static async delete(id) {
    const sql = `
      DELETE FROM ${table} WHERE id = "${id}"
    `;
    const [rows] = await db.execute(sql);
		return rows;
  }

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

