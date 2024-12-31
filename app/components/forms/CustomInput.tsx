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
}

export default function CustomInput({
  label,
  value,
  checked,
  name,
  type = "text",
  onChange,
}: Props) {
  return (
    <div
      className={`flex ${
        type === "checkbox" ? "flex-row items-center" : "flex-col"
      } gap-1 text-primary-dark-100`}
    >
      <InputLabel htmlFor={name}>{label ?? ""}</InputLabel>
      {type !== "checkbox" ? (
        <Input id={name} type={type} value={value} onChange={onChange} />
      ) : (
        <Checkbox id={name} checked={checked} onChange={onChange} />
      )}
    </div>
  );
}
