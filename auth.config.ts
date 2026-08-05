// Auth configuration for Next.js app
export const authConfig = {
  providers: [],
  callbacks: {
    authorized({ auth }: { auth: { user?: unknown } | null }) {
      const isLoggedIn = !!auth?.user;
      return isLoggedIn;
    },
  },
  secret: process.env.AUTH_SECRET,
};
