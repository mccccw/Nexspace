import { Router } from "express"; const ok = (_: any, res: any) => res.json({ ok: true });
export const searchRouter = Router();
searchRouter.get("/", ok);searchRouter.get("/users", ok);searchRouter.get("/spaces", ok);searchRouter.get("/posts", ok);searchRouter.get("/ai", ok);
