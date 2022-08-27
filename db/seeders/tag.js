import connector from "../connector.js";

const db = await connector();

const tagTableSQL = `
INSERT INTO Tags(id, name)
VALUES ("a1","Important Urgent"),
("b2","Important Not Urgent"),
("c3","Not Important Urgent"),
("d4","Not Important Not Urgent");
`

export default  async function tagSeed() {
  const a = await db.execute(tagTableSQL)
  if (a) console.log("Tag seeder has been executed")
  db.end()
}
tagSeed()