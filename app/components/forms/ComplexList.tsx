"use client";

import {
  CodeBlockObjectType,
  CodeBlockObjectValueType,
} from "@/app/types/codeBlockObject";
import { Button } from "@mui/material";
import { useFormikContext } from "formik";
import ComplexListItem from "./ComplexListItem";
import { removeItemFromArrayByIndex } from "@/app/helpers/helpers";

export default function ComplexList() {
  const { values, setFieldValue } = useFormikContext<CodeBlockObjectType>();

  const handleAddNew = () => {
    const currentArray =
      (values?.complexData as CodeBlockObjectValueType[]) ?? [];
    setFieldValue("complexData", [
      ...currentArray,
      {
        id: currentArray.length + 1,
        description: "",
        age: 0,
        isAccepted: false,
      },
    ]);
  };

  const handleRemove = (index: number) => {
    setFieldValue(
      "complexData",
      removeItemFromArrayByIndex(
        (values?.complexData as CodeBlockObjectValueType[]) ?? [],
        index
      )
    );
  };

  return (
    <div className="flex flex-col gap-4">
      {((values?.complexData as string[]) ?? []).map((_, index: number) => (
        <ComplexListItem
          key={index}
          index={index}
          handleRemove={handleRemove}
        />
      ))}
      <Button variant="contained" onClick={() => handleAddNew()}>
        Add new Item
      </Button>
    </div>
  );
}
