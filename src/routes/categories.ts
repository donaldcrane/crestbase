import { Router as expRouter } from "express";
import { getCategories } from "../controllers";

const router = expRouter();

router.get("/", getCategories);

export default router;
