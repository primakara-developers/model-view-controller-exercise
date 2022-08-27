import connector from "../db/connector.js";

const db = await connector();
const table = "Tags";

export default class TagTodo {
	static create(todo, description, tag) {
		this.findOne()
	}

	static edit() {}

	static delete() {}

	static async find() {
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
