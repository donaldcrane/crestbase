import { enumPlanName } from "@prisma/client";

export const plan = [
  {
    id: 1,
    name: enumPlanName.premiumListing,
  },
  {
    id: 2,
    name: enumPlanName.premiumBoostListing,
  },
];

export const subscriptionPlan = [
  {
    planId: 1,
    name: "Monthly",
    price: 3000,
    durationInMonths: 1,
    features: "this is a monthly payment plan",
  },
  {
    planId: 1,
    name: "Yearly",
    price: 36000,
    durationInMonths: 12,
    features: "this is a yearly payment plan",
  },
  {
    planId: 2,
    name: "Monthly",
    price: 5000,
    durationInMonths: 1,
    features: "this is a monthly payment plan",
  },
  {
    planId: 1,
    name: "Yearly",
    price: 60000,
    durationInMonths: 12,
    features: "this is a yearly payment plan",
  },
];
export const category = [
  {
    id: 1,
    name: "land",
  },
];
