import crypto from "crypto";
import * as UserRepository from "../repositories/UserRepository";

const roles = {
    user: 1,
    admin: 2
}

export function hashString(toHash) {
    return crypto.createHash("sha512").update(toHash).digest("hex").toUpperCase();
}

export async function isUserValid(username, password) {
    const name = await UserRepository.getFromName(username);
    if (name !== undefined) {
        const passhash = hashString(password);
        return passhash === name.passhash;
    }
    return false;
}

export async function isUserAnAdmin (account) {
    if (account?.role_id === roles.admin) {
        return true;
    } else return false;
}
