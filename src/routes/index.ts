import { Router as expRouter } from "express";
import userRoutes from "./user";
import planRoutes from "./plan";
import landRoutes from "./land";
import categoryRoutes from "./categories";
import fileRoutes from "./file";

const router = expRouter();
import { isAuthenticated } from "../middlewares";

router.use("/users", userRoutes);
router.use("/plans", isAuthenticated, planRoutes);
router.use("/lands", isAuthenticated, landRoutes);
router.use("/categories", isAuthenticated, categoryRoutes);
router.use("/files", fileRoutes);
export default router;
