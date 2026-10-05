import NextAuth from "next-auth";
// import AppleProvider from 'next-auth/providers/apple'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import mongoose from "mongoose";
import User from "@/app/Models/User";
import Payement from "@/app/Models/Payment";
import GitHubProvider from "next-auth/providers/github";
import connectDB from "@/app/db/connectDb";

const authoptions = NextAuth({
  debug: true,
  providers: [
    // OAuth authentication providers...
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
      FacebookProvider({
        clientId: process.env.FACEBOOK_ID,
        clientSecret: process.env.FACEBOOK_SECRET
      }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),   
    // // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>'
    // }),
  ],
  
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === "github" ||
  account.provider === "google") {
        await connectDB();
        //check if user exists in database
        const currentUser = await User.findOne({ email: user.email });
        if (!currentUser) {
          const newUser = new User({
            email: user.email,
            username: user.email.split("@")[0],
          });
          await newUser.save();
        }
      }
      return true;
    },
   async session({ session }) {
  if (!session?.user?.email) {
    return session;
  }

  await connectDB();

  const dbUser = await User.findOne({
    email: session.user.email,
  });

  if (dbUser) {
    session.user.username = dbUser.username;
  }

  return session;
},
  },
});

export { authoptions as GET, authoptions as POST };
