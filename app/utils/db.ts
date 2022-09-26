import {
  Database,
  PostgresConnector,
} from "https://deno.land/x/denodb@v1.0.39/mod.ts";
import models from "../models/index.ts";
import config from "./config.ts";

const connector = new PostgresConnector(config.db);
const db = new Database(connector);

db.link(models);

export default () => {
  db.sync({ drop: config.environment === "development" });
};
