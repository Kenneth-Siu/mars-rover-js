import database from "./database";

const databaseName = "users";

export async function getFromName(name) {
    const result = await database.any(`SELECT * FROM ${databaseName} WHERE name = $1`, [name]);
    console.log(result);
    if (result.length > 0) {
        return result[0];
    }
    return undefined;
}

export async function get(id) {
    const result = await database.any(`SELECT * FROM ${databaseName} WHERE id = $1`, [id]);
    if (result.length > 0) {
        return result[0];
    }
    return undefined;
}

export async function getAll() {
    return await database.any(`SELECT * FROM ${databaseName}`);
}
