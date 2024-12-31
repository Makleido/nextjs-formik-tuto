import * as yup from "yup";

export const simpleListValidator = yup.object().shape({
  description: yup.array().of(yup.string()),
});
