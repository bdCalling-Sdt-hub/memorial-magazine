"use client";
import { IInput } from "@/types";
import React from "react";

const Input: React.FC<IInput> = ({
  placeholder,
  className,
  onChange,
  name,
  value,
}) => {
  return (
    <input
      className={`border px-3 py-3 rounded-md bg-transparent border-primary ${className}`}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
    />
  );
};

export default Input;
