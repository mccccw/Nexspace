import { Router } from "express"; const ok = (_: any, res: any) => res.json({ ok: true });
export const fileRouter = Router();
fileRouter.get("/", ok);fileRouter.post("/upload", ok);fileRouter.delete("/:id", ok);fileRouter.get("/folders", ok);fileRouter.post("/folders", ok);fileRouter.delete("/folders/:id", ok);fileRouter.patch("/:id/move", ok);
