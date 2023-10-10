import { Router as expRouter } from "express";
import { getCategories } from "../controllers";

const router = expRouter();

router.get("/:id", getCategories);

export default router;
