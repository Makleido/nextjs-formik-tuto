"use client";

import { IKeyValueItem } from "@/app/interfaces/keyValueItem";
import {
  getKeyValueItems,
  isObject,
  isObjectArray,
  isStringOrNumberArray,
} from "../../helpers/helpers";
import PairRender from "./PairRender";
import KeyArrayWrapper from "./KeyArrayWrapper";
import LeftCurlyBracket from "./assets/LeftCurlyBracket";
import RightCurlyBracket from "./assets/RightCurlyBracket";
import LeftBracket from "./assets/LeftBracket";
import RightBracket from "./assets/RightBracket";
import ArrayRender from "./ArrayRender";
import {
  CodeBlockObjectArrayValueType,
  CodeBlockObjectType,
} from "@/app/types/codeBlockObject";

interface Props {
  data?: CodeBlockObjectType;
  keyValueArray?: IKeyValueItem[];
}

export default function RenderObject({ data, keyValueArray = [] }: Props) {
  const keyValuePairs = data ? getKeyValueItems(data) : keyValueArray;

  return (
    <code
      className={`break-all text-ellipsis dark:text-highlight-dark-300 text-highlight-light-300`}
    >
      <p>{data ? <LeftCurlyBracket /> : <LeftBracket />}</p>
      <div className="pl-3">
        {keyValuePairs?.map((pair, index) => (
          <KeyArrayWrapper
            key={index}
            pair={pair}
            isNotBasic={
              isObjectArray(pair.value as CodeBlockObjectArrayValueType) ||
              isStringOrNumberArray(pair.value) ||
              isObject(pair.value)
            }
          >
            {isObjectArray(pair.value as CodeBlockObjectArrayValueType) ? (
              <RenderObject
                keyValueArray={getKeyValueItems(
                  pair.value as CodeBlockObjectType,
                  ""
                )}
              />
            ) : isStringOrNumberArray(pair.value) ? (
              <ArrayRender pair={pair} />
            ) : isObject(pair.value) ? (
              <RenderObject data={pair.value as CodeBlockObjectType} />
            ) : (
              <PairRender pair={pair} index={index} />
            )}
          </KeyArrayWrapper>
        ))}
      </div>
      <p>{data ? <RightCurlyBracket /> : <RightBracket />},</p>
    </code>
  );
}
