import { fetchCategories } from "../services";
import { controller } from "../core";
import { Controller } from "../utils";

export const getCategories: Controller = (req, res) =>
  controller({
    req,
    res,
    service: fetchCategories,
  });
