import * as yup from "yup";

export const complexListValidator = yup.object().shape({
  complexData: yup.array().of(
    yup.object().shape({
      id: yup.number().optional(),
      description: yup.string().required(),
      age: yup.number().required(),
      isAccepted: yup.boolean().oneOf([true]).required(),
    })
  ),
});
