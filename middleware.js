import { NextResponse } from 'next/server'

export function middleware(request) {
  const url = request.nextUrl
  const hostname = request.headers.get('host')
  
  // Get the subdomain
  const subdomain = hostname.split('.')[0]
  
  // Handle different subdomains
  if (subdomain === 'admin') {
    // Rewrite to admin app
    return NextResponse.rewrite(new URL(`/admin${url.pathname}`, request.url))
  }
  
  if (subdomain === 'supplier') {
    // Rewrite to supplier app
    return NextResponse.rewrite(new URL(`/supplier${url.pathname}`, request.url))
  }
  
  // Default to store app (www or no subdomain)
  return NextResponse.rewrite(new URL(`/store${url.pathname}`, request.url))
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