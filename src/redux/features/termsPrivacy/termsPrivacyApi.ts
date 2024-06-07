import { api } from "@/redux/api/apiSlice";

const termsPrivacyApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTermsAndCondition: builder.query({
      query: () => "/terms/condition",
    }),
    getPrivacyPolicy: builder.query({
      query: () => "/privacy/policy",
    }),
    getAbout: builder.query({
      query: () => "/about",
    }),
  }),
});

export const {
  useGetTermsAndConditionQuery,
  useGetPrivacyPolicyQuery,
  useGetAboutQuery,
} = termsPrivacyApi;
