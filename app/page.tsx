"use client";

import ComplexList from "./components/forms/ComplexList";
import ObjectForm from "./components/forms/objectForm/ObjectForm";
import SimpleFields from "./components/forms/SimpleFields";
import SimpleList from "./components/forms/SimpleList";
import {
  complexListInitialValues,
  simpleInitialValues,
  simpleListInitialValues,
} from "./constants/exampleInitialValues";
import { complexListValidator } from "./validators/complexListValidator";
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
            {/* 
              This contains only some fields that can be changed
            */}
            <ObjectForm
              title="Simple form with basic values"
              initialValues={simpleInitialValues}
              validationSchema={simpleValidator}
            >
              <SimpleFields />
            </ObjectForm>
            {/* 
              This contains an array of strings that can be modified
            */}
            <ObjectForm
              title="Simple form with an array of string"
              initialValues={simpleListInitialValues}
              validationSchema={simpleListValidator}
            >
              <SimpleList />
            </ObjectForm>
            {/* 
              This contains an array of complex objects that can be modified
            */}
            <ObjectForm
              title="Complex form containing multiple fields in an array of objects"
              initialValues={complexListInitialValues}
              validationSchema={complexListValidator}
            >
              <ComplexList />
            </ObjectForm>
          </div>
          <div className={`col-span-2 ${backgrounds}`}></div>
        </div>
      </div>
    </div>
  );
}
