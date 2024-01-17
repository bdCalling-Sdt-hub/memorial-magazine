"use client";
import { IButton } from "@/types";
import React from "react";

const Button: React.FC<IButton> = ({
  children,
  className = "",
  icon,
  onClick,
  type,
}) => {
  return (
    <button
      className={`${className} justify-center text-center  rounded-md  px-4 py-3 flex items-center gap-2 text-sm`}
      type={type}
      onClick={onClick}
    >
      {children}
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;
