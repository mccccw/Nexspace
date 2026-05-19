import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import swaggerUi from "swagger-ui-express";
import { authRouter } from "./routes/auth.routes";
import { userRouter } from "./routes/user.routes";
import { spaceRouter } from "./routes/space.routes";
import { postRouter } from "./routes/post.routes";
import { chatRouter } from "./routes/chat.routes";
import { fileRouter } from "./routes/file.routes";
import { aiRouter } from "./routes/ai.routes";
import { searchRouter } from "./routes/search.routes";
import { adminRouter } from "./routes/admin.routes";

export const createApp = () => {
  const app = express();
  app.use(helmet());
  app.use(cors({ origin: process.env.FRONTEND_URL }));
  app.use(express.json({ limit: "2mb" }));
  app.use(morgan("dev"));
  app.use(rateLimit({ windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS ?? 60000), max: Number(process.env.RATE_LIMIT_MAX_REQUESTS ?? 100) }));

  app.get("/health", (_req, res) => res.json({ ok: true }));
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup({ openapi: "3.0.0", info: { title: "NexSpace API", version: "1.0.0" } }));

  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/users", userRouter);
  app.use("/api/v1/spaces", spaceRouter);
  app.use("/api/v1/posts", postRouter);
  app.use("/api/v1/chat", chatRouter);
  app.use("/api/v1/files", fileRouter);
  app.use("/api/v1/ai", aiRouter);
  app.use("/api/v1/search", searchRouter);
  app.use("/api/v1/admin", adminRouter);

  return app;
};
