import database from "./database";

const databaseName = "quotations";

export async function get(id) {
    const result = await database.any("SELECT * FROM $1 WHERE id = $2", [databaseName, id]);
    if (result.length > 0) {
        return result[0];
    }
    return undefined;
}

export async function getAll() {
    return await database.any("SELECT * FROM $1", [databaseName]);
}
