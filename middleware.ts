import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (req.nextUrl.pathname.startsWith("/career-path") && !token) {
    console.log("🔒 Unauthorized access, redirecting to login...");
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/career-path/:path*"],
};
