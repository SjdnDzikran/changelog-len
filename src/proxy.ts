import { timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const USERNAME = "admin";
const PASSWORD = "P@ssw0rd";

/** Constant-time string comparison to avoid leaking credentials via timing. */
function safeEqual(a: string, b: string): boolean {
  const aBuf = Buffer.from(a, "utf8");
  const bBuf = Buffer.from(b, "utf8");
  return aBuf.length === bBuf.length && timingSafeEqual(aBuf, bBuf);
}

function isAuthorized(request: NextRequest): boolean {
  const header = request.headers.get("authorization");
  if (!header?.startsWith("Basic ")) return false;

  const decoded = Buffer.from(header.slice(6), "base64").toString("utf8");
  const separator = decoded.indexOf(":");
  if (separator === -1) return false;

  return (
    safeEqual(decoded.slice(0, separator), USERNAME) &&
    safeEqual(decoded.slice(separator + 1), PASSWORD)
  );
}

export function proxy(request: NextRequest) {
  if (!isAuthorized(request)) {
    return new NextResponse("Authentication required", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="LEN Logistics Changelog", charset="UTF-8"',
      },
    });
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Protect everything except static assets and favicons.
    "/((?!_next/static|_next/image|favicon.ico|favicon-16x16.png|favicon-32x32.png).*)",
  ],
};
