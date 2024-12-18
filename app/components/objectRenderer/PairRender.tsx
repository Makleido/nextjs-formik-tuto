"use client";

import { IKeyValueItem } from "@/app/interfaces/keyValueItem";

interface Props {
  pair: IKeyValueItem;
  index: number;
}

export default function PairRender({ pair, index }: Props) {
  return (
    <p>
      {pair.key !== `${index}` ? (
        <span>
          <var className="dark:text-highlight-dark-200 text-highlight-light-200">
            {pair.key}
          </var>
          {": "}
          <span className="dark:text-highlight-dark-100 text-highlight-light-100">
            {pair.value as string | number}
          </span>
        </span>
      ) : (
        (pair.value as string | number)
      )}
      ,
    </p>
  );
}
