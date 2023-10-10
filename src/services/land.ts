import {
  Service,
  response,
  updateLandData,
  landData,
  databaseError,
  updatePagination,
  PaginatedData,
  LandFilterData,
} from "../utils";
import { service } from "../core";
import {
  countLands,
  countUserLands,
  createLand,
  deleteUserLand,
  findLand,
  findLands,
  findUserLand,
  findUserLands,
  updateLandListStatus,
  updateLand,
} from "../repos";
import { enumLandStatus } from "@prisma/client";

export const saveLand: Service<landData> = ({ validatedData, user }) =>
  service(async () => {
    if (!user?.id) return response.serverError();

    const { data, error } = await createLand(user.id, validatedData);

    if (error) return response.failed(error);
    if (!data) return response.serverError(databaseError);

    return response.created(data, "Land added successfully.");
  });

export const modifyLand: Service<updateLandData> = ({
  validatedData,
  user,
  id,
}) =>
  service(async () => {
    if (!user?.id) return response.serverError();

    const { data: userLand, error: LandError } = await findUserLand(
      user.id,
      id
    );
    if (LandError) return response.serverError(LandError);
    if (!userLand) return response.notFound("Land");

    const { data, error } = await updateLand(id, validatedData);
    if (error) return response.failed(error);

    return response.success(data, "Land updated successfully");
  });

export const fetchAllLands: Service<unknown, unknown, LandFilterData> = ({
  filters,
  pagination,
}) =>
  service(async () => {
    const { status } = filters;
    const { data, error } = await findLands(
      status as enumLandStatus,
      pagination
    );

    if (error) return response.serverError(error);
    const { data: totalLands } = await countLands(status as enumLandStatus);

    const responseData: PaginatedData<unknown> = {
      results: data,
      pagination: updatePagination(pagination, totalLands ?? 0),
    };

    return response.success(responseData, "Lands fetched successfully");
  });

export const fetchAllUserLands: Service<unknown, unknown, LandFilterData> = ({
  id,
  pagination,
  filters,
}) =>
  service(async () => {
    const { status } = filters;
    const { data, error } = await findUserLands(
      id,
      status as enumLandStatus,
      pagination
    );
    if (error) return response.serverError(error);
    const { data: totalLands } = await countUserLands(
      id,
      status as enumLandStatus
    );

    const responseData: PaginatedData<unknown> = {
      results: data,
      pagination: updatePagination(pagination, totalLands ?? 0),
    };
    return response.success(responseData, "User Lands fetched successfully");
  });

export const fetchLandById: Service = ({ id }) =>
  service(async () => {
    const { data, error } = await findLand(id);
    if (!data) return response.notFound("Land does not exist");
    if (error) return response.serverError(error);
    return response.success(data, "Land fetched successfully");
  });

export const removeLand: Service = ({ user, id }) =>
  service(async () => {
    if (!user) return response.serverError();

    const { error } = await deleteUserLand(user.id, id);
    if (error) return response.serverError(error);

    return response.success("Land deleted successfully");
  });

export const modifylistOrUnlistLandStatus: Service<
  unknown,
  unknown,
  LandFilterData
> = ({ user, id, filters }) =>
  service(async () => {
    if (!user) return response.serverError();
    const { status } = filters;

    const { data, error: LandError } = await findLand(id);
    if (!data) return response.notFound("Land does not exist");
    if (LandError) return response.serverError(LandError);

    const { data: land, error } = await updateLandListStatus(
      id,
      status as enumLandStatus
    );
    if (error) return response.serverError(error);

    return response.success(land, "Landlikes updated successfully");
  });
