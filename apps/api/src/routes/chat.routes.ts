import { Router } from "express"; const ok = (_: any, res: any) => res.json({ ok: true });
export const chatRouter = Router();
chatRouter.get("/channels/:id/messages", ok);chatRouter.post("/channels/:id/messages", ok);chatRouter.delete("/channels/:id/messages/:msgId", ok);chatRouter.patch("/channels/:id/messages/:msgId", ok);
