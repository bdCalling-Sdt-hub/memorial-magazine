"use client";
import { IconArrowRight, IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const menuList = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About Us",
      path: "/about-us",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Stories",
      path: "/stories",
    },
    {
      title: "Pricing",
      path: "/pricing",
    },
  ];

  return (
    <div className="">
      <nav className="container lg:flex items-center justify-between py-2">
        <div className="flex items-center justify-between px-3 lg:px-0">
          <Link href="/">
            <img src="/images/footerLogo.png" className="w-24 lg:w-36" alt="" />
          </Link>
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setShow(!show)}
          >
            {show ? (
              <IconX color="#fff" size={25} />
            ) : (
              <IconMenu2 color="#fff" size={25} />
            )}
          </div>
        </div>

        <ul
          className={`space-y-5 lg:space-y-0  lg:flex items-center gap-10 bg-primary lg:bg-transparent duration-500 h-screen lg:h-auto p-3 absolute lg:static ${
            show ? "left-0 top-0 w-[250px]" : "-left-full top-0"
          }`}
        >
          {menuList.map((item) => (
            <li key={item.title} className="text-white">
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
          <Link
            href="/contact"
            className="text-white border px-2 py-3 rounded-md flex items-center gap-1 text-sm"
          >
            Contact us
            <IconArrowRight size={18} />
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
