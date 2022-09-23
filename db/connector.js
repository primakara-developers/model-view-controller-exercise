import "dotenv/config";
import mysql from "mysql2/promise";

export default async function connector() {
  return mysql.createConnection({
    host: "localhost",
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });
}
