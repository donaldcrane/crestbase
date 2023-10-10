import { repo } from "../core";
import { db } from "../models";
import { Pagination } from "../utils";

export const findCategories = (pagination: Pagination) =>
  repo(() =>
    db.categories.findMany({
      take: pagination.size,
      skip: pagination.size * pagination.page,
    })
  );
export const countCategories = () => repo(() => db.categories.count({}));
