import { repo } from "../core";

import { db, enumLandStatus } from "../models";
import { Pagination, landData, updateLandData } from "../utils";

export const createLand = (
  id: number,
  { images, documents, categoryId, ...data }: landData
) =>
  repo(() =>
    db.lands.create({
      data: {
        ...data,
        user: {
          connect: {
            id,
          },
        },
        category: {
          connect: { id: categoryId },
        },
        images: images
          ? {
              createMany: {
                data: images,
              },
            }
          : undefined,
        documents: documents
          ? {
              createMany: {
                data: documents,
              },
            }
          : undefined,
      },
      include: {
        user: {
          select: { id: true, name: true, phone: true },
        },
        category: true,
        images: { include: { file: true } },
        documents: { include: { file: true } },
      },
    })
  );

export const findUserLand = (userId: number, id: number) =>
  repo(() =>
    db.lands.findFirst({
      where: { userId, id },
    })
  );

export const updateLand = (
  id: number,
  { images, documents, ...data }: updateLandData
) =>
  repo(() =>
    db.lands.update({
      where: { id },
      data: {
        ...data,
        images: images
          ? {
              createMany: {
                data: images,
              },
            }
          : undefined,
        documents: documents
          ? {
              createMany: {
                data: documents,
              },
            }
          : undefined,
      },
      include: {
        user: { select: { id: true, name: true } },
        category: true,
        images: { include: { file: true } },
        documents: { include: { file: true } },
      },
    })
  );

export const findLand = (id: number) =>
  repo(() =>
    db.lands.findUnique({
      where: { id },
      include: {
        user: { select: { id: true, name: true } },
        category: true,
        images: { include: { file: true } },
        documents: { include: { file: true } },
      },
    })
  );

export const findUserLands = (
  userId: number,
  status: enumLandStatus,
  pagination: Pagination
) =>
  repo(() =>
    db.lands.findMany({
      where: {
        userId,
        status: status ? status : undefined,
      },
      include: {
        user: { select: { id: true, name: true } },
        category: true,
        images: { include: { file: true } },
        documents: { include: { file: true } },
      },
      take: pagination.size,
      skip: pagination.size * pagination.page,
    })
  );

export const countUserLands = (userId: number, status: enumLandStatus) =>
  repo(() =>
    db.lands.count({
      where: {
        userId,
        status: status ? status : undefined,
      },
    })
  );

export const countLands = (status: enumLandStatus) =>
  repo(() =>
    db.lands.count({
      where: {
        status: status ? status : undefined,
      },
    })
  );

export const findLands = (status: enumLandStatus, pagination: Pagination) =>
  repo(() =>
    db.lands.findMany({
      where: {
        status: status ? status : undefined,
      },
      include: {
        user: { select: { id: true, name: true } },
        category: true,
        images: { include: { file: true } },
        documents: { include: { file: true } },
      },
      take: pagination.size,
      skip: pagination.size * pagination.page,
    })
  );

export const deleteUserLand = (userId: number, id: number) =>
  repo(() =>
    db.lands.deleteMany({
      where: {
        userId,
        id,
      },
    })
  );

export const updateLandListStatus = (id: number, status: enumLandStatus) =>
  repo(() =>
    db.lands.update({
      where: {
        id,
      },
      data: { status },
    })
  );
