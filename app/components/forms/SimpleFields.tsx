"use client";

import { CodeBlockObjectType } from "@/app/types/codeBlockObject";
import { useFormikContext } from "formik";
import { ChangeEvent } from "react";
import CustomInput from "./CustomInput";

export default function SimpleFields() {
  /**
   * values, errors and touched are objects in the formik context wich can be used
   * for showing and validating data
   *
   * setFieldTouched and setFieldValue is for setting some of these values, as
   * the input field wont change its touched value and
   * normal value by default in this case
   *
   * for automatic usage we would need to use formik fields
   * which requires only names, but cant be used with normal react hooks
   * https://formik.org/docs/api/useField
   */
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
