"use client";
import { useGetPricingQuery } from "@/redux/features/pricing/pricingApi";
import HeadingDescription from "@/util/HeadingDescription";
import { usePathname } from "next/navigation";
import PricingCard from "./PricingCard";

const Pricing = () => {
  const path = usePathname();
  const { data, isLoading } = useGetPricingQuery(undefined);
  console.log(data?.data);
  return (
    <div className={`${path === "/pricing" ? "" : "bg-secondary py-20"}`}>
      <div className="container">
        <HeadingDescription
          className="text-center mb-14"
          headingText="Pricing"
          descriptionText="We offer a wide range of funeral services and arrangements to  help you honor and celebrate the life of your loved one."
        />
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="grid grid-cols-3 gap-4  mx-20">
            {data?.data.map((item: any, index: number) => (
              <PricingCard key={index} data={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Pricing;
