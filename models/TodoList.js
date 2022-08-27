import Connector from "../db/connector.js";

const db = await Connector();
const table = "todo";

export default class TodoList {
	static create(todo, description, tag) {
		this.findOne()
	}

	static edit() {}

	static delete() {}

	static find() {
		const sql = `SELECT * FROM ${table}`;
		const [rows] = await db.execute(sql)

		return rows;
	}

	static async findOne(field, value) {
		const sql = `SELECT * FROM ${table} WHERE ${field} LIKE '%${value}%'`;
		const [rows] = await db.execute(sql)

		return rows;
	}
}
