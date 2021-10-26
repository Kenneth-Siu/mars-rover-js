import express from "express";
import { urlencoded, json } from "body-parser";
import apiRoutes from "./backend/apiRoutes.js";
import renderingRoutes from "./backend/renderingRoutes.js";
import passport from "passport";
import passportJwt from "passport-jwt";
import * as UserRepository from "./backend/repositories/UserRepository.js";
import { secret } from "./backend/config";
const app = express();

app.disable("x-powered-by");
app.use(urlencoded({ extended: false }));
app.use(json());

configurePassport();
app.use(passport.initialize());

app.use("/api", apiRoutes);
app.use(express.static(process.env.RAZZLE_PUBLIC_DIR));
app.use("/", renderingRoutes);

function configurePassport() {
    const jwtOptions = {
        jwtFromRequest: passportJwt.ExtractJwt.fromHeader("x-access-token"),
        secretOrKey: secret,
    };
    passport.use(
        new passportJwt.Strategy(jwtOptions, async (decodedJwt, done) => {
            const user = await UserRepository.getFromName(decodedJwt.username);
            if (user !== undefined) {
                done(null, user);
            } else {
                done(null, false);
            }
        })
    );
}

export default app;
