import Joi from "joi";
import { landData, updateLandData, LandFilterData } from "../utils";

export const createLandSchema = Joi.object<landData>({
  name: Joi.string().required(),
  size: Joi.string().required(),
  fullPrice: Joi.number().required(),
  initialDeposit: Joi.number().required(),
  location: Joi.string().required(),
  area: Joi.string().required(),
  features: Joi.string().required(),
  categoryId: Joi.number().required(),
  longitude: Joi.number().required(),
  latitude: Joi.number().required(),
  inspectScheduleDay: Joi.date().required(),
  inspectScheduleTime: Joi.string().required(),
  rentPerAnnum: Joi.number().required(),
  images: Joi.array()
    .items({
      name: Joi.string().required(),
      fileId: Joi.number().required(),
    })
    .required(),
  documents: Joi.array()
    .items({
      name: Joi.string().required(),
      fileId: Joi.number().required(),
    })
    .required(),
});

export const updateLandSchema = Joi.object<updateLandData>({
  name: Joi.string().optional().allow(""),
  size: Joi.string().optional().allow(""),
  fullPrice: Joi.number().optional().allow(""),
  initialDeposit: Joi.number().optional().allow(""),
  location: Joi.string().optional().allow(""),
  area: Joi.string().optional().allow(""),
  features: Joi.string().optional().allow(""),
  longitude: Joi.number().optional().allow(""),
  latitude: Joi.number().optional().allow(""),
  inspectScheduleDay: Joi.date().optional().allow(""),
  inspectScheduleTime: Joi.string().optional().allow(""),
  rentPerAnnum: Joi.number().optional().allow(""),
  images: Joi.array()
    .items({
      name: Joi.string().required(),
      fileId: Joi.number().required(),
    })
    .optional(),
  documents: Joi.array()
    .items({
      name: Joi.string().required(),
      fileId: Joi.number().required(),
    })
    .optional(),
});

export const listOrBoostLandSchema = Joi.object<LandFilterData>({
  status: Joi.string().optional(),
});
