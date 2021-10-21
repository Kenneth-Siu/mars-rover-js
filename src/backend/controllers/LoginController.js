import express from "express";
import UserService from "../services/UserService";
import jwt from "jsonwebtoken";
import { secret } from "../config";

const router = express.Router();

router.get("/", async (req, res) => {
    res.send("test");
});
router.post("/", async (req, res) => {
    const body = req.body;
    console.log(req.body);
    const isValid = await UserService.isUserValid(body.username, body.password);
    if (isValid) {
        res.send({
            message: `Valid credentials. Welcome, ${body.username}`,
            token: createTokenForUser(body.username),
        });
    } else {
        res.status(400).send({
            errors: "Invalid credentials :(",
        });
    }
});

function createTokenForUser(username) {
    return jwt.sign({ username: username }, secret);
}

export default router;
