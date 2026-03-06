import express from "express";
import triageRoutes from "./routes/triageRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/triage", triageRoutes);

export default app;
