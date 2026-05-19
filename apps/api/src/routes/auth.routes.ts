import { Router } from "express";
const ok = (_: any, res: any) => res.json({ ok: true });
export const authRouter = Router();
authRouter.post("/register", ok);authRouter.post("/login", ok);authRouter.post("/logout", ok);authRouter.post("/refresh", ok);
authRouter.post("/forgot-password", ok);authRouter.post("/reset-password", ok);authRouter.get("/me", ok);
authRouter.get("/oauth/google", ok);authRouter.get("/oauth/google/callback", ok);authRouter.get("/oauth/github", ok);authRouter.get("/oauth/github/callback", ok);authRouter.get("/oauth/discord", ok);authRouter.get("/oauth/discord/callback", ok);
authRouter.post("/2fa/setup", ok);authRouter.post("/2fa/verify", ok);authRouter.delete("/2fa/disable", ok);
