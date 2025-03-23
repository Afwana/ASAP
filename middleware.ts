import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Get the path the user is trying to access
  const path = request.nextUrl.pathname;

  // Define which paths should be accessible without authentication
  const isPublicPath = path === "/login" || path === "/register";

  // Get the token from cookies (however you store your auth token)
  const token = request.cookies.get("token")?.value || "";

  // If the user is not logged in and trying to access a protected route
  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If the user is logged in and trying to access login/register
  if (token && isPublicPath) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// Configure which routes this middleware runs on
export const config = {
  matcher: ["/login", "/register"],
};
