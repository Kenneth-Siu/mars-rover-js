import express from "express";
import * as UserService from "../services/UserService";
import jwt from "jsonwebtoken";
import { secret } from "../config";

const router = express.Router();

router.post("/", async (req, res) => {
    const body = req.body;
    if (body === undefined || body.username === undefined || body.password === undefined) {
        res.status(400).send({
            message: "Malformed request. A required object was undefined",
        });
    }
    const isValid = await UserService.isUserValid(body.username, body.password);
    if (isValid) {
        res.send({
            message: `Valid credentials. Welcome, ${body.username}`,
            token: createTokenForUser(body.username),
        });
    } else {
        res.status(401).send({
            message: "Invalid credentials :(",
        });
    }
});

function createTokenForUser(username) {
    return jwt.sign({ username: username }, secret);
}

export default router;
