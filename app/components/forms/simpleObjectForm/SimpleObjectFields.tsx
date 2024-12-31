"use client";

import { CodeBlockObjectType } from "@/app/types/codeBlockObject";
import { useFormikContext } from "formik";
import CustomInput from "../CustomInput";
import { ChangeEvent } from "react";
import CodeBlock from "../../objectRenderer/CodeBlock";

export default function SimpleObjectFields() {
  const { values, setFieldValue } = useFormikContext<CodeBlockObjectType>();

  const handleFieldChange = (
    evt: ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const value = evt.target.value;
    setFieldValue(name, value);
  };

  const handleCheckboxChange = (
    evt: ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const value = evt.target.checked;
    setFieldValue(name, value);
  };

  return (
    <div className="flex flex-row gap-10 justify-between py-10 px-5">
      <div className="flex flex-col gap-6">
        <CustomInput
          label="simple description"
          name="simple-description"
          value={values?.description as string}
          onChange={(evt) => handleFieldChange(evt, "description")}
          type="text"
        />
        <CustomInput
          label="simple age"
          name="simple-age"
          value={values?.age as number}
          onChange={(evt) => handleFieldChange(evt, "age")}
          type="number"
        />
        <CustomInput
          label="simple checkbox"
          name="simple-checkbox"
          value={values?.isAccepted as string}
          onChange={(evt) => handleCheckboxChange(evt, "isAccepted")}
          type="checkbox"
        />
      </div>
      <div className="w-[60%]">
        <CodeBlock data={values} />
      </div>
    </div>
  );
}
