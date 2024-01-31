"use client";

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import BreadCrumb from "@/util/BreadCrumb";
import { usePathname } from "next/navigation";
import React from "react";

const GroupLayout = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  const text = path.slice(1);
  const breadCrumb = text.split("-").join(" ");

  return (
    <div>
      <div className="banner h-[400px]">
        <Navbar />
        <div className="flex flex-col justify-center items-center space-y-3 mt-28 text-center">
          <h2 className="text-4xl text-white font-semibold capitalize tracking-wide">
            {breadCrumb}
          </h2>
          <BreadCrumb title={breadCrumb} />
        </div>
      </div>
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default GroupLayout;
