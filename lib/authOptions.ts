import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import User from "@/models/User";
import { connectToDatabase } from "./mongodb";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectToDatabase();

        if (credentials?.email) {
          const user = await User.findOne({ email: credentials.email });

          if (!user) {
            // If no user is found, throw an error
            console.log("❌ No user found with that email.");
            throw new Error("No user found with that email.");
          }

          // Check password if credentials login
          const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
          if (!isPasswordValid) {
            console.log("❌ Invalid password");
            throw new Error("Invalid password!!");
          }

          // Return user data if everything is valid
          return { id: user._id, name: user.name, email: user.email };
        }

        // If no email is provided (should not happen), return null
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user!.id = token.id as string;
      }
      return session;
    },
    async signIn({ user, account, profile }) {
      if (account?.provider === "google" && user) {
        await connectToDatabase();
        
        // Check if the user exists in the database
        const existingUser = await User.findOne({ email: user.email });

        // If the user doesn't exist, create a new one using Google data
        if (!existingUser) {
          const newUser = new User({
            name: profile?.name, // Google provides name
            email: user.email,   // Google provides email
            password: "",        // Google login doesn't require password
          });
          await newUser.save();
        }
      }

      return true;
    },
  },
  pages: {
    signIn: "/login", // Specify custom login page
  },
};
