"use client";

import { IKeyValueItem } from "@/app/interfaces/keyValueItem";
import LeftBracket from "./assets/LeftBracket";
import RightBracket from "./assets/RightBracket";
import {
  CodeBlockObjectArrayValueType,
  CodeBlockObjectNormalValueType,
} from "@/app/types/codeBlockObject";

interface Props {
  pair: IKeyValueItem;
}

export default function ArrayRender({ pair }: Props) {
  return (
    <>
      <LeftBracket />
      {(pair.value as CodeBlockObjectArrayValueType).map(
        (item: CodeBlockObjectNormalValueType, itemIndex: number) => (
          <p key={itemIndex}>
            <span className="pl-3 dark:text-highlight-dark-100 text-highlight-light-100">
              {item as string | number}
            </span>
            ,
          </p>
        )
      )}
      <p>
        <RightBracket />,
      </p>
    </>
  );
}
