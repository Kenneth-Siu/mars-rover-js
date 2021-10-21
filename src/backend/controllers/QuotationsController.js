import express from "express";
import * as QuotationsService from "../services/QuotationsService.js";

const router = express.Router();

router.get("/of-the-day", async (req, res) => {
    try {
        const quotation = await QuotationsService.getQuotationOfTheDay();
        res.send(quotation);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});

router.get("/:quotationId", async (req, res) => {
    try {
        const quotation = await QuotationsService.get(req.params.quotationId);
        res.send(quotation);
    } catch (err) {
        if (err.name === NotFoundErrorName) {
            res.sendStatus(404);
        } else {
            console.error(err);
            res.sendStatus(500);
        }
    }
});

router.post("/", async (req, res) => {
    const body = req.body;
    try {
        await QuotationsService.accessAddToDatabase(body.text, body.attribution);
        res.sendStatus(201);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});

export default router;
