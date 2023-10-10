import { Service, response, updatePagination, PaginatedData } from "../utils";
import { service } from "../core";
import {
  countPlans,
  findPlan,
  findPlans,
  findSubscriptionPlans,
} from "../repos";

export const fetchPlans: Service = ({ pagination }) =>
  service(async () => {
    const { data, error } = await findPlans(pagination);

    if (error) return response.serverError(error);
    const { data: totalPlans } = await countPlans();

    const responseData: PaginatedData<unknown> = {
      results: data,
      pagination: updatePagination(pagination, totalPlans ?? 0),
    };

    return response.success(responseData, "Plans fetched successfully");
  });

export const fetchPlanById: Service = ({ id }) =>
  service(async () => {
    const { data, error } = await findPlan(id);
    if (!data) return response.notFound("Plan does not exist");
    if (error) return response.serverError(error);
    return response.success(data, "Plan fetched successfully");
  });

export const fetchSubPlanById: Service = ({ id }) =>
  service(async () => {
    const { data, error } = await findSubscriptionPlans(id);
    if (!data) return response.notFound("Subscription plan does not exist");
    if (error) return response.serverError(error);
    return response.success(data, "Subscription plan fetched successfully");
  });
