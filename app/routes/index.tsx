import { Handlers, PageProps } from "$fresh/server.ts";

import Users from "@/islands/Users.tsx";
import User from "@/models/User.ts";

export const handler: Handlers<User[]> = {
  async GET(_, ctx) {
    const users = await User.all();
    return ctx.render(users);
  },
};

export default function Home({ data }: PageProps<User[]>) {
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <p class="my-6">Server rendered: There are {data.length} users!</p>
      <Users />
    </div>
  );
}
