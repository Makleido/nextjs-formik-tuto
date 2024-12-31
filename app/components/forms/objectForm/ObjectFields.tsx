"use client";

import { PropsWithChildren } from "react";
import CodeBlock from "../../objectRenderer/CodeBlock";
import { useFormikContext } from "formik";
import { CodeBlockObjectType } from "@/app/types/codeBlockObject";

export default function ObjectFields({ children }: PropsWithChildren) {
  /**
   * formik context usage, we also can create contexts and use like this, its easier to access data
   * for now here we only get the values as its the "initialValues" data, and is the changed data
   */
  const { values } = useFormikContext<CodeBlockObjectType>();

  return (
    <div className="flex flex-row gap-10 justify-between pb-10 pt-5 px-5">
      <div className="flex flex-col gap-6 w-[35%]">{children}</div>
      <div className="w-[60%]">
        <CodeBlock data={values} />
      </div>
    </div>
  );
}
