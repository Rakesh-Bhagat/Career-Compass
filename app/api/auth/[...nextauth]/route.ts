import NextAuth from "next-auth";
import { authOptions } from "@/lib/authOptions";

const handler = NextAuth(authOptions);

// Export named handlers for each HTTP method
export { handler as GET, handler as POST };
