export type CodeBlockObjectNormalValueType = string | number | object;
export type CodeBlockObjectArrayValueType = CodeBlockObjectNormalValueType[];
export type CodeBlockObjectValueType =
  | CodeBlockObjectNormalValueType
  | CodeBlockObjectArrayValueType;
export type CodeBlockObjectType = { [key: string]: CodeBlockObjectValueType };
