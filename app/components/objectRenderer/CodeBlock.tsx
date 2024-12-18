"use client";

import { CodeBlockObjectType } from "@/app/types/codeBlockObject";
import RenderObject from "./RenderObject";

interface Props {
  data?: CodeBlockObjectType;
}

export default function CodeBlock({ data }: Props) {
  return (
    <div className="dark:bg-primary-light-100 bg-primary-dark-100 dark:bg-opacity-25 bg-opacity-50 w-full">
      <RenderObject data={data} />
    </div>
  );
}
