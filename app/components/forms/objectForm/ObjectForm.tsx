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
      {/* 
        Formik needs some props by default:
        - initialValues: the object which we will be modifying, this can be any or something else, 
          as we use the formik it can be modified any time, however if we want help with types
          then we should not ad new values except those that are included in the used interface
        - onSubmit: submit function which fires when a submit button is clicked or the function
          is called from the context
        also we can add more props that is defined, as for now i only used the validation schemas
        which enables for us to use yup validation on the fields in the values
      */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {/* 
          Formik form component, its the same as <form></form> from HTML
        */}
        <Form>
          <ObjectFields>{children}</ObjectFields>
        </Form>
      </Formik>
      {/* 
        Formik can be called like this also:
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log(values)}
          >
            {({values}: FormikProps) => (
              <Form>
                ...
              </Form>
            )}
          </Formik>
        but its many times buggier and harder to use as we can use the "values"
        for example only in the context of the "component" we make in HTML 
        */}
    </div>
  );
}
