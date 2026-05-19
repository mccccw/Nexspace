import { Router } from "express"; const ok = (_: any, res: any) => res.json({ ok: true });
export const adminRouter = Router();
adminRouter.get("/users", ok);adminRouter.patch("/users/:id/ban", ok);adminRouter.patch("/users/:id/role", ok);adminRouter.get("/spaces", ok);adminRouter.delete("/spaces/:id", ok);adminRouter.get("/reports", ok);adminRouter.get("/stats", ok);
