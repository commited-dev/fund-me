import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { type Session } from 'next-auth';
import { type JWT } from 'next-auth/jwt';
import { client } from './sanity/lib/client';
import { AUTHOR_BY_GOOGLE_ID_QUERY } from './lib/queries';
import { writeClient } from './sanity/lib/write-client';

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

    async signIn({ user, profile }) {
      const existingUser = await client.fetch(AUTHOR_BY_GOOGLE_ID_QUERY, { id: profile?.id });

      if (!existingUser) {
        await writeClient.create({
          _type: 'author',
          id: profile?.id,
          name: user?.name,
          username: profile?.login,
          email: user?.email,
          image: user?.image,
          bio: profile?.bio || '',
        });
      }

      return true;
    },
  },
});
