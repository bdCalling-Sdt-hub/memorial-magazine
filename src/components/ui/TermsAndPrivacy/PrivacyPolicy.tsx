"use client";

import { useGetPrivacyPolicyQuery } from "@/redux/features/termsPrivacy/termsPrivacyApi";

const PrivacyPolicy = () => {
  const { data } = useGetPrivacyPolicyQuery(undefined);
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: data?.data?.description }} />
    </>
  );
};

export default PrivacyPolicy;
