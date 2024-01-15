"use client";

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { usePathname } from "next/navigation";
import React from "react";

const GroupLayout = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  const text = path.slice(1);
  const firstLetter = text.charAt(0).toUpperCase();
  return (
    <div>
      <div className="banner h-[400px]">
        <Navbar />
        <div className="flex justify-center items-center mt-28 text-center">
          <div className="space-y-2">
            <h2 className="text-4xl text-white font-bold">
              {firstLetter + text.slice(1)}
            </h2>
            <p className="text-white">Home-Contact</p>
          </div>
        </div>
      </div>
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default GroupLayout;
