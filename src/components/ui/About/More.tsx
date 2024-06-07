"use client";
import { useGetAboutQuery } from "@/redux/features/termsPrivacy/termsPrivacyApi";

const More = () => {
  const { data } = useGetAboutQuery(undefined);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: data?.data?.description }} />
    </div>
  );
};

export default More;
