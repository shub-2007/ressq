import { Router } from "express";
import { getTriageSystem, getTriageVersion, getProtocols } from "../controllers/triageController.js";

const router = Router();

router.get("/triage-flow", getTriageSystem);
router.get("/triage-version", getTriageVersion);
router.get("/protocols", getProtocols);

export default router;
