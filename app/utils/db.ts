import { Database, PostgresConnector } from "denodb";

import models from "@/models/index.ts";
import config from "@/utils/config.ts";

const connector = new PostgresConnector(config.db);
const db = new Database(connector);

db.link(models);

export default () => {
  // TODO: enable this when there is a model change...
  db.sync({ drop: config.environment === "development" });
};
