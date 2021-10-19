import database from "./database";

const databaseName = "users";

export async function getFromName(name) {
    const result = database.any("SELECT * FROM $1 WHERE name = $2", [databaseName, name]);
    if (result.length > 0) {
        return result[0];
    }
    return undefined;
}

export async function get(id) {
    const result = database.any("SELECT * FROM $1 WHERE id = $2", [databaseName, id]);
    if (result.length > 0) {
        return result[0];
    }
    return undefined;
}

export async function getAll() {
    return await database.any("SELECT * FROM $1", [databaseName]);
}
