import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow access to /login and static files
  if (pathname.startsWith("/login") || pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  // Check for auth-token cookie
  const token = req.cookies.get("auth-token");
  if (!token) {
    // Redirect to /login with redirect query
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("redirect", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Apply middleware to all routes except static files
export const config = { matcher: ["/((?!_next/static|favicon.ico).*)"] };