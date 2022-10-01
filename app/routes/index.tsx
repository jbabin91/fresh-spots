import { Handlers } from "$fresh/server.ts";

import FreshMap from "@/islands/FreshMap.tsx";
import User from "@/models/User.ts";

export const handler: Handlers<User[]> = {
  async GET(_, ctx) {
    const users = await User.all();
    return ctx.render(users);
  },
};

export default function Home() {
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      {
        /* <a
        href="/auth/discord"
        class="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Login With Discord
      </a> */
      }
      <FreshMap />
    </div>
  );
}
