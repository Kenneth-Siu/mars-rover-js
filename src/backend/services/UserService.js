import crypto from "crypto";
import * as UserRepository from "../repositories/UserRepository";

class UserService {
    static hashString(toHash) {
        return crypto.createHash("sha512").update(toHash).digest("hex").toUpperCase();
    }
    static async isUserValid(username, password) {
        const name = await UserRepository.getFromName(username);
        if (name !== undefined) {
            const passhash = this.hashString(password);
            return passhash === name.passhash;
        }
        return false;
    }
}

export default UserService;
