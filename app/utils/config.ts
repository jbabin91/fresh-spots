import * as mod from "https://deno.land/std@0.157.0/dotenv/mod.ts";

await mod.config({
  export: true,
});

import EnvironmentVariableNames from "@/constants/EnvironmentVariableNames.ts";
import { Config, ConfigSchema } from "@/schemas/Config.ts";

const envConfig: Config = {
  base_url: Deno.env.get(EnvironmentVariableNames.BASE_URL) ||
    "http://localhost:8000",
  environment: Deno.env.get(EnvironmentVariableNames.DENO_ENV) || "",
  db: {
    database: Deno.env.get(EnvironmentVariableNames.DB_NAME) || "",
    host: Deno.env.get(EnvironmentVariableNames.DB_HOST) || "",
    username: Deno.env.get(EnvironmentVariableNames.DB_USERNAME) || "",
    password: Deno.env.get(EnvironmentVariableNames.DB_PASSWORD) || "",
    port: Number(Deno.env.get(EnvironmentVariableNames.DB_PORT) || 5432),
  },
  // TODO: make sure these variables are set... (is a schema validator)
  oauth: {
    discord: {
      client_id: Deno.env.get(EnvironmentVariableNames.DISCORD_CLIENT_ID) || "",
      client_secret:
        Deno.env.get(EnvironmentVariableNames.DISCORD_CLIENT_SECRET) || "",
    },
  },
};

// TODO: maybe... cleanup the error that is logged
const config = ConfigSchema.parse(envConfig);

export default config;
