"use client";
import { IHeadingText } from "@/types";
import React from "react";

const HeadingText: React.FC<IHeadingText> = ({ children, className = "" }) => {
  return (
    <h2 className={`text-4xl font-semibold  text-[#3A3A3A] ${className}`}>
      {children}
    </h2>
  );
};

export default HeadingText;
