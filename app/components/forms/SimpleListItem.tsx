"use client";

import { CodeBlockObjectType } from "@/app/types/codeBlockObject";
import { useFormikContext } from "formik";
import CustomInput from "./CustomInput";
import { ChangeEvent } from "react";
import { Button } from "@mui/material";

interface Props {
  index: number;
  handleRemove: (index: number) => void;
}

export default function SimpleListItem({ index, handleRemove }: Props) {
  const { values, setFieldValue } = useFormikContext<CodeBlockObjectType>();

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement>) => {
    /**
     * if we are using arrays, then in setFieldValue we need to add
     * the proper name of the value, for example this is a simple
     * string array, so we need the name of the array attribute,
     * and the index of the string element to set it with a new value
     */
    setFieldValue(`descriptions[${index}]`, evt.target.value);
  };

  return (
    <div className="flex flex-row gap-4 w-full items-center bg-slate-300/20 px-4 py-3">
      <CustomInput
        label="Description"
        name={`${index}-description`}
        value={(values?.descriptions as string[])[index]}
        onChange={handleFieldChange}
        type="text"
      />
      <Button
        variant="contained"
        color="error"
        onClick={() => handleRemove(index)}
      >
        Remove item
      </Button>
    </div>
  );
}
