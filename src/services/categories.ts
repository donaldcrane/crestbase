import { PaginatedData, Service, response, updatePagination } from "../utils";
import { service } from "../core";
import { findCategories, countCategories } from "../repos";

export const fetchCategories: Service = ({ user, pagination }) =>
  service(async () => {
    if (!user?.id) return response.serverError();

    const { data, error } = await findCategories(pagination);
    if (error) return response.failed(error);

    const { data: totalCategories } = await countCategories();
    const responseData: PaginatedData<unknown> = {
      results: data,
      pagination: updatePagination(pagination, totalCategories ?? 0),
    };
    return response.success(responseData, "Categories fetched successfully.");
  });
