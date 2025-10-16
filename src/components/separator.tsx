import type { HTMLAttributes } from "react";

const Separator = (props: HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className="w-full block py-[10px] px-[15px]" {...props}>
      <hr className="border-t border-border" />
    </span>
  );
};

export default Separator;
