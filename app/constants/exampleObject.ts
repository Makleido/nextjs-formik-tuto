import { CodeBlockObjectType } from "../types/codeBlockObject";

export const exampleObject: CodeBlockObjectType = {
  id: 1,
  name: "example",
  description: "example object",
  properties: ["example property 1", "example property 2"],
  numbers: [1, 4, 3],
  complexData: [
    {
      id: 1,
      name: "complex 1",
      properties: ["example property 1", "example property 2"],
    },
    {
      id: 1,
      name: "complex 2",
      description: "example complex data",
    },
  ],
};
