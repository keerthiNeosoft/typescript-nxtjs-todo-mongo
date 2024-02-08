import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const pathname = request.nextUrl.pathname;
  const cookie = request.cookies.get("next-auth.session-token");
  const isToken = cookie ? cookie : "";
  const isPublicPath = pathname === "/auth";

  if (isToken && isPublicPath) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  if (!isToken && !isPublicPath) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }
}

export const config = {
  matcher: ["/", "/auth", "/settings", "/profile"],
};
