import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req) {
  const token = req.cookies.get("token")?.value;

  const path = req.nextUrl.pathname;

  const protectedRoutes = ["/user", "/admin"];

  if (protectedRoutes.some((r) => path.startsWith(r))) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      if (path.startsWith("/admin") && decoded.role !== "admin") {
        return NextResponse.redirect(new URL("/user", req.url));
      }
    } catch {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/user/:path*", "/admin/:path*"],
};
