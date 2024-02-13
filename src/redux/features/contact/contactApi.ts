import { api } from "@/redux/api/apiSlice";

const contactApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postContact: builder.mutation({
      query: (data) => ({
        url: "/contact",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { usePostContactMutation } = contactApi;
