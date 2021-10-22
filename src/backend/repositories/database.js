import pgp from "pg-promise";
import { connectionString } from "../config";

const database = pgp()(connectionString);

export default database;
