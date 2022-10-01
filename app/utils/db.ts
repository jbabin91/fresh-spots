import models from "@/models/index.ts";
import config from "@/utils/config.ts";
import { Database, PostgresConnector } from "denodb";

const connector = new PostgresConnector(config.db);
const db = new Database(connector);

db.link(models);

export default () => {
  db.sync({ drop: config.environment === "development" });
};
