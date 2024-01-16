import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

const Navbar = () => {
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
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  return (
    <div className="">
      <div className="container flex items-center justify-between py-2">
        <div>
          <img src="/images/footerLogo.png" className="w-36" alt="" />
        </div>
        <div>
          <ul className={`flex items-center gap-10`}>
            {menuList.map((item) => (
              <li key={item.title} className="text-white">
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
            <button className="text-white border px-2 py-3 rounded-md flex items-center gap-1 text-sm">
              Contact us
              <IconArrowRight size={18} />
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
