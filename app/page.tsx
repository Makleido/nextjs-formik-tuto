"use client";

import ObjectForm from "./components/forms/objectForm/ObjectForm";
import SimpleFields from "./components/forms/SimpleFields";
import SimpleList from "./components/forms/SimpleList";
import {
  simpleInitialValues,
  simpleListInitialValues,
} from "./constants/exampleInitialValues";
import { simpleListValidator } from "./validators/simpleListValidator";
import { simpleValidator } from "./validators/simpleValidator";

const backgrounds =
  "dark:bg-primary-light-100 bg-primary-dark-100 dark:bg-opacity-25 bg-opacity-50 w-full";

export default function Home() {
  return (
    <div className="lg:px-12 px-6 w-full">
      <div className="w-full min-h-screen py-4 px-3">
        <h1 className="font-medium text-center text-3xl">
          Formik Tutorial with Examples
        </h1>
        <div className="grid grid-cols-10 gap-4 mt-10 items-start">
          <div className={`col-span-2 ${backgrounds}`}></div>
          <div className={`col-span-6`}>
            <ObjectForm
              title="Simple form with basic values"
              initialValues={simpleInitialValues}
              validationSchema={simpleValidator}
            >
              <SimpleFields />
            </ObjectForm>

            <ObjectForm
              title="Simple form with an array of string"
              initialValues={simpleListInitialValues}
              validationSchema={simpleListValidator}
            >
              <SimpleList />
            </ObjectForm>
          </div>
          <div className={`col-span-2 ${backgrounds}`}></div>
        </div>
      </div>
    </div>
  );
}
