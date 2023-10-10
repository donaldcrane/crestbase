import { Router as expRouter } from "express";
import { getPlans, getPlanById, getSubPlanById } from "../controllers";

const router = expRouter();

router.get("/", getPlans);
router.get("/subscription/:id", getSubPlanById);
router.get("/:id", getPlanById);

export default router;
