import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher([
  '/((?!.*).*)',
  '/', // Public root route
  '/sign-in(.*)', // Public sign-in routes
  '/sign-up(.*)', // Public sign-up routes
  '/((?!api|trpc|_next|.*\\.(?:css|js|png|jpg|gif|ico)).*)', // Public catch-all route
])

export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
