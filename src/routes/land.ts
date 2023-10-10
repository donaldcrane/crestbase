import { Router as expRouter } from "express";
import {
  createLand,
  getAllLands,
  getAllUserLands,
  getLandById,
  updateLand,
  deleteLand,
  lisrOrUnlistLand,
} from "../controllers";

const router = expRouter();

router.post("/", createLand);

router.get("/", getAllLands);
router.get("/users/:id/", getAllUserLands);
router.get("/:id", getLandById);

router.patch("/modify/:id", lisrOrUnlistLand);
router.patch("/:id", updateLand);

router.delete("/:id", deleteLand);

export default router;
