import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, // Optional secret for JWT signing
  callbacks: {
    async signIn({ user }) {
      // Add custom logic, e.g., create a user in your database
      return user;
    },
  },
});
