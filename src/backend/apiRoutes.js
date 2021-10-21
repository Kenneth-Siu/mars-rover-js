import express from "express";
import QuotationsController from "./controllers/QuotationsController.js";
import PhotosController from "./controllers/PhotosController"
const router = express.Router();

router.use("/quotations", QuotationsController);
router.use("/photos",PhotosController)

router.use((req, res) => {
    res.sendStatus(404);
});

export default router;
