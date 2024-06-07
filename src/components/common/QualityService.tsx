"use client";
import { useGetAllServiceQuery } from "@/redux/features/service/serviceApi";
import HeadingDescription from "@/util/HeadingDescription";
import { usePathname } from "next/navigation";
import ServiceCard from "./ServiceCard";

const QualityService = () => {
  const path = usePathname();
  const { data, isLoading } = useGetAllServiceQuery(undefined);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={`${path === "/services" ? "" : "bg-secondary py-20"}`}>
      <div className="container">
        <HeadingDescription
          className="text-center mb-14 capitalize"
          headingText="Magazine Sections"
          //descriptionText="We offer a wide range of funeral services and arrangements to  help you honor and celebrate the life of your loved one."
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {data?.data.map((item: any, index: number) => (
            <ServiceCard key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QualityService;
