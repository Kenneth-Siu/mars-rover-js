import express from "express";
import { urlencoded, json } from "body-parser";
import apiRoutes from "./backend/apiRoutes.js";
import renderingRoutes from "./backend/renderingRoutes.js";

const app = express();

app.disable("x-powered-by");
app.use(urlencoded({ extended: false }));
app.use(json());
app.use("/api", apiRoutes);
app.use(express.static(process.env.RAZZLE_PUBLIC_DIR));
app.use("/", renderingRoutes);


export default app;