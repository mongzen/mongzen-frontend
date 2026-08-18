import { NextRequest, NextResponse } from 'next/server';

const REALM = 'Mongzen Internal';

function isAuthorized(request: NextRequest): boolean {
  const user = process.env.BASIC_AUTH_USER;
  const password = process.env.BASIC_AUTH_PASSWORD;

  // If no credentials are configured, fail closed rather than leaving the site open.
  if (!user || !password) {
    return false;
  }

  const authHeader = request.headers.get('authorization');
  if (!authHeader?.startsWith('Basic ')) {
    return false;
  }

  const base64Credentials = authHeader.slice('Basic '.length);
  const [suppliedUser, suppliedPassword] = Buffer.from(base64Credentials, 'base64')
    .toString('utf-8')
    .split(':');

  return suppliedUser === user && suppliedPassword === password;
}

export function middleware(request: NextRequest) {
  if (isAuthorized(request)) {
    return NextResponse.next();
  }

  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': `Basic realm="${REALM}", charset="UTF-8"`,
    },
  });
}

export const config = {
  matcher: [
    /*
     * Protect everything except Next.js internals and static assets,
     * so images/fonts/etc still load without prompting for auth again.
     */
    '/((?!_next/static|_next/image|favicon.ico|apple-icon|icon|robots.txt|sitemap.xml).*)',
  ],
};
