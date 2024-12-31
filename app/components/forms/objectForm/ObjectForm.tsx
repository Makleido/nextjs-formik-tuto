"use client";

import { Form, Formik } from "formik";
import ObjectFields from "./ObjectFields";
import { CodeBlockObjectType } from "@/app/types/codeBlockObject";
import { ObjectSchema } from "yup";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  title: string;
  initialValues: CodeBlockObjectType;
  validationSchema: ObjectSchema<object>;
}

export default function ObjectForm({
  title,
  initialValues,
  validationSchema,
  children,
}: Props) {
  return (
    <div className="dark:bg-primary-light-100 bg-primary-dark-100 dark:bg-opacity-25 bg-opacity-50 w-full">
      <h2 className="px-5 pt-10 pb-5 text-center font-bold text-2xl">
        {title}
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <Form>
          <ObjectFields>{children}</ObjectFields>
        </Form>
      </Formik>
    </div>
  );
}
