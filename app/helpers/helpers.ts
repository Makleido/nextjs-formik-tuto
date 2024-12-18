import {
  CodeBlockObjectArrayValueType,
  CodeBlockObjectType,
  CodeBlockObjectValueType,
} from "../types/codeBlockObject";

export function isObjectArray(array: CodeBlockObjectArrayValueType) {
  return (
    Array.isArray(array) &&
    typeof array[0] === "object" &&
    isNotStringOrNumberObject(array[0])
  );
}

export function isObject(item: CodeBlockObjectValueType) {
  return (
    typeof item === "object" &&
    isNotStringOrNumberObject((item as CodeBlockObjectArrayValueType)[0])
  );
}

export function isNotStringOrNumberObject(item: CodeBlockObjectValueType) {
  return typeof item !== "string" && typeof item !== "number";
}

export function isStringOrNumberArray(array: CodeBlockObjectValueType) {
  return (
    Array.isArray(array) &&
    (typeof array[0] === "string" || typeof array[0] === "number")
  );
}

export function getKeyValueItems(
  data: CodeBlockObjectType,
  customKeyValue?: string
) {
  return Object.keys(data).map((key) => ({
    key: customKeyValue ?? key,
    value: data[key],
  }));
}
