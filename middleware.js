import { NextResponse } from 'next/server';

export function middleware(req) {
  // Define the routes you want to protect
  const protectedRoutes = ['/enterprises', '/profile' ];

  const isProtectedRoute = protectedRoutes.some(route => req.nextUrl.pathname.startsWith(route));

  // Check if the user is authenticated
  const isAuthenticated = req.cookies.get('token'); 

  if (isProtectedRoute && !isAuthenticated) {
    // Redirect to the login page if not authenticated
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Continue to the requested page if authenticated or not a protected route
  return NextResponse.next();
}

// Define the matcher to apply the middleware to all routes
export const config = {
  matcher: ['/:path*'],
};
