import {
  saveLand,
  fetchAllLands,
  fetchAllUserLands,
  fetchLandById,
  modifyLand,
  removeLand,
  modifylistOrUnlistLandStatus,
} from "../services";
import { controller } from "../core";
import { Controller } from "../utils";
import {
  createLandSchema,
  updateLandSchema,
  listOrBoostLandSchema,
} from "../schemas";

export const createLand: Controller = (req, res) =>
  controller({
    req,
    res,
    service: saveLand,
    validation: { schema: createLandSchema },
  });

export const getAllLands: Controller = (req, res) =>
  controller({
    req,
    res,
    service: fetchAllLands,
  });

export const getAllUserLands: Controller = (req, res) =>
  controller({
    req,
    res,
    service: fetchAllUserLands,
    params: { id: Number(req.params.id) },
  });

export const getLandById: Controller = (req, res) =>
  controller({
    req,
    res,
    params: { id: Number(req.params.id) },
    service: fetchLandById,
  });

export const updateLand: Controller = (req, res) =>
  controller({
    req,
    res,
    service: modifyLand,
    params: { id: Number(req.params.id) },
    validation: { schema: updateLandSchema },
  });

export const lisrOrUnlistLand: Controller = (req, res) =>
  controller({
    req,
    res,
    service: modifylistOrUnlistLandStatus,
    params: { id: Number(req.params.id) },
    filterValidation: listOrBoostLandSchema,
  });

export const deleteLand: Controller = (req, res) =>
  controller({
    req,
    res,
    service: removeLand,
    params: { id: Number(req.params.id) },
  });
