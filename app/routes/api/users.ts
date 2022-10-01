import { HandlerContext } from "$fresh/server.ts";

import SocialProfile from "@/models/SocialProfile.ts";
import User from "@/models/User.ts";

export const handler = async (
  _req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  const users = await User.all();
  // TODO: delete this whole file
  const socialProfiles = await SocialProfile.where(
    "user_id",
    // @ts-ignore: TODO: fix this
    "in",
    users.map((user) => user.id),
  ).all();
  const socialProfilesByUserId = socialProfiles.reduce((byId, profile) => {
    // @ts-ignore: Object is possibly 'undefined'.
    byId.set(profile.user_id, profile);
    return byId;
  }, new Map<string, SocialProfile>());
  users.forEach((user) => {
    // @ts-ignore: Object is possibly 'undefined'.
    user.social_profile = socialProfilesByUserId.get(user.id);
  });
  return Response.json(users);
};
