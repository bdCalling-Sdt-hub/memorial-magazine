import {
  IconMailOpenedFilled,
  IconMap,
  IconPhone,
  IconWorld,
} from "@tabler/icons-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-primary">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 text-white py-[100px] container">
        <div>
          <img src="/images/footerLogo.png" alt="" />
          <p className="mt-5">
            We understand every funeral is different because every person
            isunique and each family situation is different.
          </p>
          <div className="flex items-center gap-4 mt-5">
            <img src="/images/Apple.png" className="w-40" alt="Banner" />
            <img src="/images/Google.png" className="w-40" alt="Banner" />
          </div>
        </div>
        <div className="lg:mx-auto">
          <h2 className="text-xl font-bold">Quick Links</h2>
          {["Services", "Contact Us", "Blog", "Pricing", "Team"].map((item) => (
            <li key={item} className="list-none my-3">
              <Link href="#">{item}</Link>
            </li>
          ))}
        </div>
        <div className="lg:mx-auto">
          <h2 className="text-xl font-bold">Services</h2>
          {["Individual Stories", "Veteran Stories", "Pets Stories"].map(
            (item) => (
              <li key={item} className="list-none my-3">
                <Link href="#">{item}</Link>
              </li>
            )
          )}
        </div>
        <div className="mx-auto">
          <h2 className="text-xl font-bold">Contact Info</h2>
          {[
            {
              icon: <IconPhone />,
              title: "(303) 274-8750",
            },
            {
              icon: <IconMailOpenedFilled />,
              title: "memorial_moment@gmail.com",
            },
            {
              icon: <IconMap />,
              title: "13005 Greenville Avenue California, TX 70240",
            },
            {
              icon: <IconWorld />,
              title: "Map & Directions",
            },
          ].map((item, index) => (
            <li key={index} className="list-none my-4 flex items-center gap-2">
              <h1>{item.icon}</h1>
              <h1>{item.title}</h1>
            </li>
          ))}
        </div>
      </div>
      <div className="border-t py-7">
        <div className="lg:flex items-center justify-between text-white container text-center lg:text-left">
          <p>
            {["Privacy Policy", "Terms & Conditions"].map((item, index) => (
              <Link
                key={item}
                href={index === 0 ? "/privacy-policy" : "terms-and-conditions"}
                className="mr-3"
              >
                {item}
              </Link>
            ))}
          </p>
          <p>memorial_moment © 2024 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
