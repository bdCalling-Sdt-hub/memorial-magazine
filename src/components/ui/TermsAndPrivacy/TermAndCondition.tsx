"use client";

import { useGetTermsAndConditionQuery } from "@/redux/features/termsPrivacy/termsPrivacyApi";

const TermAndCondition = () => {
  const { data } = useGetTermsAndConditionQuery(undefined);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: data?.data?.description }} />
    </>
  );
};

export default TermAndCondition;
