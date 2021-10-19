import express from "express";

const router = express.Router();

router.get("/photos", async (req, res) => {
  try {
    const underConstruction = "This page under construction";
    res.send(underConstruction);
  } catch (err) {
    console.error(err);
    res.sendStatus(501);
  }
});

export default router;
