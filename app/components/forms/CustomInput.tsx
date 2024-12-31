"use client";

import { Checkbox, Input, InputLabel } from "@mui/material";
import { ChangeEvent } from "react";

interface Props {
  label?: string;
  value?: string | number;
  checked?: boolean;
  name: string;
  type: "checkbox" | "number" | "text";
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export default function CustomInput({
  label,
  value,
  checked,
  name,
  type = "text",
  error,
  onChange,
}: Props) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div
        className={`flex ${
          type === "checkbox" ? "flex-row items-center" : "flex-col"
        } gap-1 w-full`}
      >
        <InputLabel htmlFor={name} className="text-primary-light-100">
          {label ?? ""}
        </InputLabel>
        {type !== "checkbox" ? (
          <Input
            id={name}
            type={type}
            value={value}
            onChange={onChange}
            className="text-primary-light-100"
          />
        ) : (
          <Checkbox
            id={name}
            checked={checked}
            onChange={onChange}
            className="text-primary-light-100"
          />
        )}
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
