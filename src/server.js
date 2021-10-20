import express from "express";
import { urlencoded, json } from "body-parser";
import apiRoutes from "./backend/apiRoutes.js";
import renderingRoutes from "./backend/renderingRoutes.js";
import passport from "passport";
import passportJwt from "passportJwt";

const app = express();

app.disable("x-powered-by");
app.use(urlencoded({ extended: false }));
app.use(json());

configurePassport();
app.use(passport.initialize());

app.use("/api", apiRoutes);
app.use(express.static(process.env.RAZZLE_PUBLIC_DIR));
app.use("/", renderingRoutes);

export default app;

function configurePassport() {
	const jwtOptions = {
		jwtFromRequest: passportJwt.ExtractJwt.fromHeader("x-access-token"),
		secretOrKey: config.secret,
	};
	passport.use(
		new passportJwt.Strategy(jwtOptions, async (decodedJwt, _) => {
			return await Users.isUserValid(decodedJwt.username, decodedJwt.passport);
		})
	);
}