import { api } from "@/redux/api/apiSlice";

const storyApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getStories: builder.query({
      query: () => "/all/story",
    }),
    getStoriesDetails: builder.query({
      query: (id) => `/story/details/${id}`,
    }),
  }),
});

export const { useGetStoriesQuery, useGetStoriesDetailsQuery } = storyApi;
