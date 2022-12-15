import SvelteKitAuth from "@auth/sveltekit";
import GitHub from "@auth/core/providers/github";
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from "$env/static/private";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const prisma = new PrismaClient();

export const handle = SvelteKitAuth({
  secret: "my-secret",
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub({ clientId: GITHUB_CLIENT_ID, clientSecret: GITHUB_CLIENT_SECRET }),
  ],
  pages: {
    signIn: "/",
  },
});
