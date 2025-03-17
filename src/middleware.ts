import { NextRequest, NextResponse } from "next/server";

export function middleware(req:NextRequest) {
    const token = req.cookies.get('token');

    const isAuthRoute = req.nextUrl.pathname.startsWith('/login');
    const isProtectedRoute = req.nextUrl.pathname.startsWith('/dashboard');

    if(!token && isProtectedRoute){
        return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();
}

// Indicate that will applied to middleware
export const config = {
    matcher: ['/dashboard/:path*', '/login'],
}
