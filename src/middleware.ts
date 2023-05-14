import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware();

export const config = {
  publicRoutes: [
    "/",
    "/u(.*)"
  ],
  // matcher: ["/((?!.*\\..*|_next).*)", "/"],
};