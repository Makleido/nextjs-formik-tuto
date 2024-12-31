"use client";

import { CodeBlockObjectType } from "@/app/types/codeBlockObject";
import { useFormikContext } from "formik";
import { ChangeEvent } from "react";
import CustomInput from "./CustomInput";

export default function SimpleFields() {
  const { values, errors, touched, setFieldTouched, setFieldValue } =
    useFormikContext<CodeBlockObjectType>();

  const handleFieldChange = (
    evt: ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const value = evt.target.value;
    setFieldTouched(name, true);
    setFieldValue(name, value);
  };

  const handleCheckboxChange = (
    evt: ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const value = evt.target.checked;
    setFieldTouched(name, true);
    setFieldValue(name, value);
  };

  return (
    <>
      <CustomInput
        label="Simple Description"
        name="simple-description"
        value={values?.description as string}
        onChange={(evt) => handleFieldChange(evt, "description")}
        type="text"
        error={touched?.description ? errors?.description : undefined}
      />
      <CustomInput
        label="Simple Age"
        name="simple-age"
        value={values?.age as number}
        onChange={(evt) => handleFieldChange(evt, "age")}
        type="number"
        error={touched?.age ? errors?.age : undefined}
      />
      <CustomInput
        label="Simple Checkbox"
        name="simple-checkbox"
        value={values?.isAccepted as string}
        onChange={(evt) => handleCheckboxChange(evt, "isAccepted")}
        type="checkbox"
        error={touched?.isAccepted ? errors?.isAccepted : undefined}
      />
    </>
  );
}
