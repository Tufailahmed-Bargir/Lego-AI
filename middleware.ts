import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const token = await getToken({ req });

  // Check if the path starts with "/ai-tools/"
  if (path.startsWith("/convert") && !token) {
    // Redirect to login if trying to access /ai-tools/ without a token
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // Allow access to all other routes regardless of token status
  return NextResponse.next();
}

export const config = {
  // Update the matcher to include all routes
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
