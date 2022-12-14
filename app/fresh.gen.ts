// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/api/create-user-temp-will-delete.ts";
import * as $1 from "./routes/api/users.ts";
import * as $2 from "./routes/auth/[provider]/callback.tsx";
import * as $3 from "./routes/auth/[provider]/index.tsx";
import * as $4 from "./routes/index.tsx";
import * as $$0 from "./islands/FreshMap.tsx";
import * as $$1 from "./islands/Users.tsx";

const manifest = {
  routes: {
    "./routes/api/create-user-temp-will-delete.ts": $0,
    "./routes/api/users.ts": $1,
    "./routes/auth/[provider]/callback.tsx": $2,
    "./routes/auth/[provider]/index.tsx": $3,
    "./routes/index.tsx": $4,
  },
  islands: {
    "./islands/FreshMap.tsx": $$0,
    "./islands/Users.tsx": $$1,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
