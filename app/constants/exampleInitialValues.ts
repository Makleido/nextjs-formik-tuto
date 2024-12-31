import { CodeBlockObjectType } from "../types/codeBlockObject";

export const simpleInitialValues: CodeBlockObjectType = {
  description: "Lorem ipsum dolor sit amet.",
  age: 23,
  isAccepted: false,
};

export const simpleListInitialValues: CodeBlockObjectType = {
  descriptions: [
    "Lorem ipsum 1",
    "Lorem ipsum 2",
    "Lorem ipsum 3",
    "Lorem ipsum 4",
  ],
};

export const complexListInitialValues: CodeBlockObjectType = {
  complexData: [
    {
      id: 1,
      ...simpleInitialValues,
    },
  ],
};
