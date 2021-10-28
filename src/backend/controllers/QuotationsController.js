import express from "express";
import * as QuotationsService from "../services/QuotationsService.js";
import passport from "passport";
import * as UserService from "../services/UserService";
import * as UserRepository from "../repositories/UserRepository";

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

router.post("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
    if (!UserService.isUserAnAdmin(UserRepository.getFromName(req.user))) {
        res.sendStatus(403);
        return;
    }
    const body = req.body;
    try {
        await QuotationsService.addToDatabase(body.text, body.attribution);
        res.sendStatus(201);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});

export default router;
