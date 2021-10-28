import express from "express";
import QuotationsController from "./controllers/QuotationsController.js";
import CameraController from "./controllers/CameraController.js";
import loginController from "./controllers/loginController.js";

const router = express.Router();

router.use("/quotations", QuotationsController);
router.use("/cameras", CameraController);
router.use("/login", loginController);
router.use((req, res) => {
    res.sendStatus(404);
});

export default router;
