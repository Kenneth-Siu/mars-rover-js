import express from "express";

const router = express.Router();

router.get("/photos", async (req, res) => {
    try {
        res.send("Under construction!");
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});

export default router;
