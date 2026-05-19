import { Router } from "express"; const ok = (_: any, res: any) => res.json({ ok: true });
export const aiRouter = Router();
aiRouter.post("/chat", ok);aiRouter.post("/summarize", ok);aiRouter.post("/improve", ok);aiRouter.post("/debug", ok);aiRouter.post("/generate", ok);aiRouter.post("/moderate", ok);
