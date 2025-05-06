import { NextResponse } from 'next/server'

export function middleware(request) {
  const url = request.nextUrl
  const hostname = request.headers.get('host')
  const pathname = url.pathname
  
  // Get the subdomain
  const subdomain = hostname.split('.')[0]
  
  // Handle different subdomains
  if (subdomain === 'admin') {
    // If not logged in and not on login page, redirect to login
    if (!pathname.startsWith('/admin/auth') && !request.cookies.has('auth_session')) {
      return NextResponse.redirect(new URL('/admin/auth/login', request.url))
    }
    return NextResponse.rewrite(new URL(`/admin${pathname}`, request.url))
  }
  
  if (subdomain === 'supplier') {
    // If not logged in and not on login page, redirect to login
    if (!pathname.startsWith('/supplier/auth') && !request.cookies.has('auth_session')) {
      return NextResponse.redirect(new URL('/supplier/auth/login', request.url))
    }
    return NextResponse.rewrite(new URL(`/supplier${pathname}`, request.url))
  }
  
  // Default to store app (www or no subdomain)
  return NextResponse.rewrite(new URL(`/store${pathname}`, request.url))
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 