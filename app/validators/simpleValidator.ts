import * as yup from "yup";

export const simpleValidator = yup.object().shape({
  description: yup.string().required(),
  age: yup.number().required(),
  isAccepted: yup.boolean().oneOf([true]).required(),
});
