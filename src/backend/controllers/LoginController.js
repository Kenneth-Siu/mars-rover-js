import express from "express";
import User from "../services/UserService";
import jwt from "jsonwebtoken";
import config from "./config";

const router = express.router();

router.get("/login", async (req, res) => {
    const username = req.query.username;
	const password = req.query.password;
    const isValid = User.isUserValid(username, password);
    if (isValid) {
        res.send({
			message: `Valid credentials. Welcome, ${username}`,
			token: createTokenForUser(username),
		});
	} else {
		res.status(400).send({
			errors: "Invalid credentials :(",
		});
	}
});


function createTokenForUser(username) {
	return jwt.sign({ username: username }, config.secret);
}

export default router;