"use client";

import { useFormikContext } from "formik";
import { CodeBlockObjectType } from "@/app/types/codeBlockObject";
import { Button } from "@mui/material";
import SimpleListItem from "./SimpleListItem";
import { removeItemFromArrayByIndex } from "@/app/helpers/helpers";

export default function SimpleList() {
  const { values, setFieldValue } = useFormikContext<CodeBlockObjectType>();

  const handleAddNew = () => {
    setFieldValue("descriptions", [
      ...((values?.descriptions as string[]) ?? []),
      "",
    ]);
  };

  const handleRemove = (index: number) => {
    setFieldValue(
      "descriptions",
      removeItemFromArrayByIndex(
        (values?.descriptions as string[]) ?? [],
        index
      )
    );
  };

  return (
    <div className="flex flex-col gap-4">
      {((values?.descriptions as string[]) ?? []).map((_, index: number) => (
        <SimpleListItem key={index} index={index} handleRemove={handleRemove} />
      ))}
      <Button variant="contained" onClick={() => handleAddNew()}>
        Add new Item
      </Button>
    </div>
  );
}
