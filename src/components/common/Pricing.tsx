"use client";
import Button from "@/util/Button";
import HeadingDescription from "@/util/HeadingDescription";
import {
  IconArrowRight,
  IconCheck,
  IconChessQueenFilled,
} from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import pricingList from "../../../public/db/pricing.json";

const Pricing = () => {
  const path = usePathname();
  return (
    <div className={`${path === "/pricing" ? "" : "bg-secondary"}`}>
      <div className="container">
        <HeadingDescription
          className="text-center mb-14"
          headingText="Pricing"
          descriptionText="We offer a wide range of funeral services and arrangements to  help you honor and celebrate the life of your loved one."
        />
        <div className="grid grid-cols-3 gap-4 ">
          {pricingList.map((item, index) => (
            <div key={index} className="bg-white rounded-md p-7">
              <h2 className="text-2xl font-semibold  flex items-center justify-center gap-3">
                <IconChessQueenFilled className="text-yellow-400" />
                {item.title}
              </h2>
              <h2 className="text-3xl font-semibold text-center text-primary my-3">
                ${item.price}/ <span className="text-lg">{item.month}</span>
              </h2>
              <h2 className="text-xl font-semibold text-center text-primary">
                {item.photo} Photos Stories
              </h2>
              <div className="my-10">
                {item.facilities.map((item) => (
                  <div key={item} className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 bg-primary text-white flex justify-center items-center rounded-full">
                      <IconCheck size={15} />
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <Button
                className="border w-full bg-primary text-white"
                icon={<IconArrowRight size={18} />}
              >
                Order Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
