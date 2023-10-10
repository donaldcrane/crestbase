/* eslint-disable require-jsdoc */
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { plan, subscriptionPlan, category } from "./data";

const main = async () => {
  try {
    await prisma.plans.createMany({
      data: plan,
    });
    await prisma.subscriptionPlans.createMany({
      data: subscriptionPlan,
    });

    await prisma.categories.createMany({ data: category });

    console.log("seeding done...");
    await prisma.$disconnect();
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  }
};

main();
