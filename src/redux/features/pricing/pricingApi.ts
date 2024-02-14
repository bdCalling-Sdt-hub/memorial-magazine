import { api } from "@/redux/api/apiSlice";

const pricingApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPricing: builder.query({
      query: () => "/pricing",
    }),
  }),
});

export const { useGetPricingQuery } = pricingApi;
