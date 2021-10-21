import database from "./database";

export async function get(id) {
  const result = database.any("SELECT * FROM quotations WHERE id = $1", [id]);
  if (result.length > 0) {
    return result[0];
  }
  return undefined;
}

export async function getAll() {
  return await database.any("SELECT * FROM quotations");
}

export async function addToDatabase(text, attribution) {
    await database.any("INSERT INTO quotations (text, attribution) VALUES ($1, $2);", [
    text,
    attribution,
  ]);
}
