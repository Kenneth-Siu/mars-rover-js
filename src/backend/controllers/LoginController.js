import express from "express";

const router = express.router();

router.get("/login", async (req, res) => {
    const username = req.query.username;
	const password = req.query.password;
    
});

export default router;