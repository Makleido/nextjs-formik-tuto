"use client";

import { simpleInitialValues } from "@/app/constants/exampleInitialValues";
import { simpleValidator } from "@/app/validators/simpleValidator";
import { Form, Formik } from "formik";
import SimpleObjectFields from "./SimpleObjectFields";

export default function SimpleObjectForm() {
  return (
    <div className="dark:bg-primary-light-100 bg-primary-dark-100 dark:bg-opacity-25 bg-opacity-50 w-full">
      <Formik
        initialValues={simpleInitialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={simpleValidator}
      >
        <Form>
          <SimpleObjectFields />
        </Form>
      </Formik>
    </div>
  );
}
