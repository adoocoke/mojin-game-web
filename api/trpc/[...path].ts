import app from "../boot";

/** Vercel serverless entry for /api/trpc/* */
export const config = { runtime: "nodejs" };

export default app;
