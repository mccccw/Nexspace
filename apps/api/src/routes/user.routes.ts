import { Router } from "express";
const ok = (_: any, res: any) => res.json({ ok: true });
export const userRouter = Router();
userRouter.get("/:username", ok);userRouter.patch("/me", ok);userRouter.post("/me/avatar", ok);userRouter.post("/me/banner", ok);
userRouter.get("/:username/posts", ok);userRouter.get("/:username/spaces", ok);userRouter.get("/:username/followers", ok);userRouter.get("/:username/following", ok);
userRouter.post("/:username/follow", ok);userRouter.delete("/:username/follow", ok);userRouter.get("/me/feed", ok);userRouter.get("/me/notifications", ok);
userRouter.patch("/me/notifications/:id/read", ok);userRouter.delete("/me/notifications/all", ok);userRouter.get("/me/saved", ok);
userRouter.get("/me/messages", ok);userRouter.get("/me/messages/:userId", ok);userRouter.post("/me/messages/:userId", ok);
