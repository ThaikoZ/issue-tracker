export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/issues/:path*", "/issues/edit/:id+"],
};
