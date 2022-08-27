import mysql from "mysql2/promise";

export default async function Connector() {
	return await mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "root1234",
    database: "db_todolist"
	});
}
