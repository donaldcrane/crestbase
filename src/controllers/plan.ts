import { fetchPlans, fetchPlanById, fetchSubPlanById } from "../services";
import { controller } from "../core";
import { Controller } from "../utils";

export const getPlans: Controller = (req, res) =>
  controller({
    req,
    res,
    service: fetchPlans,
  });

export const getPlanById: Controller = (req, res) =>
  controller({
    req,
    res,
    service: fetchPlanById,
    params: { id: Number(req.params.id) },
  });

export const getSubPlanById: Controller = (req, res) =>
  controller({
    req,
    res,
    service: fetchSubPlanById,
    params: { id: Number(req.params.id) },
  });
