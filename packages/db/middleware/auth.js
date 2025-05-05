import { auth } from '../auth/lucia'
import { NextResponse } from 'next/server'

// Role-based access control middleware
export async function authMiddleware(request) {
  const session = await auth.handleRequest(request)
  
  if (!session) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  const user = session.user
  const path = request.nextUrl.pathname

  // Admin routes protection
  if (path.startsWith('/admin')) {
    if (user.role !== 'main-admin' && user.role !== 'admin') {
      return NextResponse.redirect(new URL('/unauthorized', request.url))
    }
  }

  // Supplier routes protection
  if (path.startsWith('/supplier')) {
    if (user.role !== 'supplier') {
      return NextResponse.redirect(new URL('/unauthorized', request.url))
    }
    // Check if supplier is approved
    if (!user.supplierInfo?.approved) {
      return NextResponse.redirect(new URL('/pending-approval', request.url))
    }
  }

  // Store routes protection (for authenticated features)
  if (path.startsWith('/account')) {
    if (!user) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next()
}

// Export the middleware configuration
export const config = {
  matcher: [
    '/admin/:path*',
    '/supplier/:path*',
    '/account/:path*'
  ]
} 