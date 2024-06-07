import { api } from "@/redux/api/apiSlice";

const serviceApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllService: builder.query({
      query: () => "/service",
    }),
    getSingleService: builder.query({
      query: (id) => `/service/${id}`,
    }),
  }),
});

export const { useGetAllServiceQuery, useGetSingleServiceQuery } = serviceApi;
