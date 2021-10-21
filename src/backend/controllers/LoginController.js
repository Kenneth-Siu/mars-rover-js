import express from "express";
import UserService from "../services/UserService";
import jwt from "jsonwebtoken";
import { secret } from "../config";

const router = express.Router();

router.get("/", async (req, res) => {
    res.send(
        'Login page. Please use POST. <a href="https://github.com/Hydroxa/mars-rover-js/wiki/login">Check the wiki here</a>'
    );
});
router.post("/", async (req, res) => {
    const body = req.body;
    if (body === undefined || body.username === undefined || body.password === undefined) {
        res.status(400).send({
            message: "Malformed request. A required object was undefined",
            code: 2,
        });
    }
    const isValid = await UserService.isUserValid(body.username, body.password);
    if (isValid) {
        res.send({
            message: `Valid credentials. Welcome, ${body.username}`,
            token: createTokenForUser(body.username),
            code: 0,
        });
    } else {
        res.status(401).send({
            message: "Invalid credentials :(",
            code: 1,
        });
    }
});

function createTokenForUser(username) {
    return jwt.sign({ username: username }, secret);
}

export default router;
