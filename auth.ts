import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { type Session } from 'next-auth';
import { type JWT } from 'next-auth/jwt';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
});
