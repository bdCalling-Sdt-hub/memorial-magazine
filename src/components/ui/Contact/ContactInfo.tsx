"use client";

import { IInformation } from "@/types";
import {
  IconDeviceLandlinePhone,
  IconMail,
  IconMap2,
} from "@tabler/icons-react";

const ContactInfo = () => {
  const info: IInformation[] = [
    {
      icon: <IconDeviceLandlinePhone size={50} />,
      title: "Phone Number",
      value: ["+1(800)123-4567", "+1(800)123-4566"],
    },
    {
      icon: <IconMap2 size={50} />,
      title: "Address line",
      value: ["176 W street name, New York,NY 10014"],
    },
    {
      icon: <IconMail size={50} />,
      title: "Email",
      value: ["Memorial_Moments_Magazine@gmail.com", "info@memorial.com"],
    },
  ];

  return (
    <div className="container grid grid-cols-3 gap-10 text-center">
      {info.map((item, index) => (
        <div key={index} className="bg-white p-10 rounded-md">
          <div className="flex items-center justify-center text-primary mb-2">
            {item.icon}
          </div>
          <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
          {item.value.map((info, index) => (
            <p key={index}>{info}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
