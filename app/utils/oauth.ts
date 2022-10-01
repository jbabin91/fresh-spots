// TODO: PR denoauth to fix README
import { DiscordClient } from "denoauth";

import config from "@/utils/config.ts";

const Discord = new DiscordClient({
  clientId: config.oauth.discord.client_id,
  clientSecret: config.oauth.discord.client_secret,
  tokenUri: "https://discord.com/api/oauth2/token",
  redirect: `${config.base_url}/auth/discord/callback`,
  // TODO: maybe request email...
  scope: "identify",
});

// TODO: update type to include all possible oauth clients
export default new Map<string, DiscordClient>([["discord", Discord]]);
