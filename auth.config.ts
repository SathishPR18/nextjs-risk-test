// Auth configuration for Next.js app — risk monitor test
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
