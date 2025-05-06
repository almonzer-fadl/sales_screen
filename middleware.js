import { NextResponse } from 'next/server'

export function middleware(request) {
  const url = request.nextUrl
  const hostname = request.headers.get('host')
  const pathname = url.pathname
  
  // Get the subdomain
  const subdomain = hostname.split('.')[0]
  
  // Handle different subdomains
  if (subdomain === 'admin') {
    // Allow access to auth routes without session
    if (pathname.startsWith('/auth')) {
      return NextResponse.rewrite(new URL(`/admin${pathname}`, request.url))
    }
    
    // Check for session on other routes
    if (!request.cookies.has('auth_session')) {
      return NextResponse.redirect(new URL('/auth/login', request.url))
    }
    
    return NextResponse.rewrite(new URL(`/admin${pathname}`, request.url))
  }
  
  if (subdomain === 'supplier') {
    // Allow access to auth routes without session
    if (pathname.startsWith('/auth')) {
      return NextResponse.rewrite(new URL(`/supplier${pathname}`, request.url))
    }
    
    // Check for session on other routes
    if (!request.cookies.has('auth_session')) {
      return NextResponse.redirect(new URL('/auth/login', request.url))
    }
    
    return NextResponse.rewrite(new URL(`/supplier${pathname}`, request.url))
  }
  
  // Default to store app (www or no subdomain)
  if (pathname.startsWith('/auth')) {
    return NextResponse.rewrite(new URL(`/store${pathname}`, request.url))
  }
  
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