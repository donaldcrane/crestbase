import { repo } from "../core";

import { db } from "../models";
import { Pagination } from "../utils";

export const findSubscriptionPlans = (id: number) =>
  repo(() =>
    db.subscriptionPlans.findUnique({
      where: { id },
    })
  );

export const findPlan = (id: number) =>
  repo(() =>
    db.plans.findUnique({
      where: { id },
      include: {
        subscriptionPlans: true,
      },
    })
  );

export const countPlans = () => repo(() => db.plans.count({}));

export const findPlans = (pagination: Pagination) =>
  repo(() =>
    db.plans.findMany({
      include: {
        subscriptionPlans: true,
      },
      take: pagination.size,
      skip: pagination.size * pagination.page,
    })
  );
