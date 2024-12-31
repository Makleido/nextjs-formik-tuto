import SimpleObjectForm from "./components/forms/simpleObjectForm/SimpleObjectForm";

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
            <SimpleObjectForm />
          </div>
          <div className={`col-span-2 ${backgrounds}`}></div>
        </div>
      </div>
    </div>
  );
}
