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
                console.log("🔍 Checking credentials:", credentials);
                await connectToDatabase();

                const user = await User.findOne({ email: credentials?.email });

                if (!user) {
                    console.log("❌ User not found");
                    throw new Error("No user found!!");
                }

                const isPasswordValid = await bcrypt.compare(credentials!.password, user.password);
                console.log("Password Match:", isPasswordValid);
                if (!isPasswordValid) {
                    console.log("❌ Incorrect password");
                    throw new Error("Invalid password!!");
                }

                return { id: user._id, name: user.name, email: user.email };
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
    },
    pages: {
        signIn: "/login",
    },
};
