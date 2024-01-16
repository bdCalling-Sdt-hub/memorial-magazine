"use client";
import { IInput } from "@/types";
import React from "react";

const Input: React.FC<IInput> = ({ placeholder, className, onChange }) => {
  return (
    <input
      className={`border px-3 py-3 rounded-md bg-transparent border-primary ${className}`}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
