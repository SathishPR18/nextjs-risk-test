// Auth configuration for Next.js app — AI risk check test run 2
export const authConfig = {
  providers: [],
  callbacks: {
    authorized({ auth }: { auth: { user?: unknown } | null }) {
      const isLoggedIn = !!auth?.user;
      return isLoggedIn;
    },
  },
  secret: process.env.NEW_SECRET_KEY || process.env.AUTH_SECRET,
};
