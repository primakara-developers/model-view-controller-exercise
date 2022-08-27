import connector from "../connector.js";

const db = await connector();

const tagTableSQL = `
CREATE TABLE IF NOT EXISTS Tags (
    id CHAR(255),
    name VARCHAR(255),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
)
`

const todoTableSQL = `
CREATE TABLE IF NOT EXISTS Todos (
    id CHAR(255),
    tag_id CHAR(255),
    title VARCHAR(255),
    description VARCHAR(255),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    FOREIGN KEY(tag_id) REFERENCES Tags(id)
)
`

export default  async function executeSQL27082022102740WITA() {
  const a = await db.execute(tagTableSQL)
  const b = await db.execute(todoTableSQL)
  if (a) console.log("Tag table has been created")
  if (b) console.log("Todo table has been created")
  db.end()
}
