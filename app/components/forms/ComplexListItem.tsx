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

export default function ComplexListItem({ index, handleRemove }: Props) {
  const { values, errors, touched, setFieldTouched, setFieldValue } =
    useFormikContext<CodeBlockObjectType>();

  /**
   * in case when we have an array of objects, we can use the
   * simple list logic for starter, so we need "coimplexData"
   * from the values object, and then we need the index of item
   * to define in which one we need the change, and then add
   * the attribute which we want to change
   * the methos is the same: "arrayName[index].value.innerValue",
   * we can stack it to the eternity, and until we wont casually
   * crash something, but the validation will be nightmare
   */

  const handleFieldChange = (
    evt: ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    setFieldTouched(`complexData[${index}].${name}`, true);
    setFieldValue(`complexData[${index}].${name}`, evt.target.value);
  };

  const handleCheckboxChange = (
    evt: ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const value = evt.target.checked;
    setFieldTouched(`complexData[${index}].${name}`, true);
    setFieldValue(`complexData[${index}].${name}`, value);
  };

  /**
   * the validation here is harder becouse of my types,
   * in normal usages it wont be a problem
   */

  const getIsTouched = (name: string) => {
    const touchedValues = touched?.complexData
      ? ((touched as CodeBlockObjectType).complexData as CodeBlockObjectType[])
      : null;
    if (touchedValues && touchedValues[index] && touchedValues[index][name]) {
      return true;
    }
    return false;
  };

  const getError = (name: string) => {
    const errorValues = errors?.complexData
      ? ((errors as CodeBlockObjectType).complexData as CodeBlockObjectType[])
      : null;
    if (errorValues && errorValues[index][name]) {
      return errorValues[index][name];
    }
    return null;
  };

  return (
    <div className="flex flex-col gap-4 w-full items-center bg-slate-300/20 px-4 py-3">
      <CustomInput
        label="Description"
        name={`${index}-description`}
        value={
          ((values?.complexData as CodeBlockObjectType[])[index]
            ?.description as string) ?? ""
        }
        onChange={(evt) => handleFieldChange(evt, "description")}
        type="text"
        error={
          getIsTouched("description")
            ? (getError("description") as string) ?? ""
            : undefined
        }
      />
      <CustomInput
        label="Age"
        name={`${index}-age`}
        value={
          ((values?.complexData as CodeBlockObjectType[])[index]
            ?.age as number) ?? 0
        }
        onChange={(evt) => handleFieldChange(evt, "age")}
        type="number"
        error={getIsTouched("age") ? `${getError("age") ?? ""}` : undefined}
      />
      <CustomInput
        label="Description"
        name={`${index}-description`}
        checked={
          ((values?.complexData as CodeBlockObjectType[])[index]
            ?.isAccepted as boolean) ?? false
        }
        onChange={(evt) => handleCheckboxChange(evt, "isAccepted")}
        type="checkbox"
        error={
          getIsTouched("isAccepted")
            ? (getError("isAccepted") as string) ?? ""
            : undefined
        }
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
