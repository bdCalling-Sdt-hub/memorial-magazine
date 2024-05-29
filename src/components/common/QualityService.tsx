"use client";
import HeadingDescription from "@/util/HeadingDescription";
import { usePathname } from "next/navigation";
import ServiceCard from "./ServiceCard";

const QualityService = () => {
  const path = usePathname();

  const qualityService = [
    {
      id: 1,
      image: "/images/service1.png",
      title: "Memorial Moments For All Loved Ones",
      description:
        "Memorial Moments Magazine Your loved One stories from your point of view.",
    },
    {
      id: 2,
      image: "/images/service2.png",
      title: "Veterans Memorial Moments",
      description:
        "This specialized section within Memorial Moments Magazine serves as a tribute to the dedicated individuals who serve or have served in uniformed profession",
    },
    {
      id: 3,
      image: "/images/service3.png",
      title: "Pet Memorial Moments",
      description:
        "This Pets Stories section within Memorial Moments Magazine aims to celebrate the joy, companionship, and profound connections that people experience",
    },
  ];
  return (
    <div className={`${path === "/services" ? "" : "bg-secondary py-20"}`}>
      <div className="container">
        <HeadingDescription
          className="text-center mb-14 capitalize"
          headingText="Magazine Sections"
          //descriptionText="We offer a wide range of funeral services and arrangements to  help you honor and celebrate the life of your loved one."
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {qualityService.map((item, index) => (
            <ServiceCard key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QualityService;
