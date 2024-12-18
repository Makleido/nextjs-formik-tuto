"use client";

import { IKeyValueItem } from "@/app/interfaces/keyValueItem";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  pair: IKeyValueItem;
  className?: string;
  isNotBasic?: boolean;
}

export default function KeyArrayWrapper({
  pair,
  children,
  className = "",
  isNotBasic = false,
}: Props) {
  return isNotBasic ? (
    <div className={`${className}`}>
      {pair.key !== "" && (
        <p>
          <var className="dark:text-highlight-dark-200 text-highlight-light-200">
            {pair.key}
          </var>
          :
        </p>
      )}
      {children}
    </div>
  ) : (
    children
  );
}
