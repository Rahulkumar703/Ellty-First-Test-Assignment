import type { ButtonHTMLAttributes } from "react";

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="h-[40px] w-full max-w-[340px] rounded bg-primary hover:bg-[#ffd84d] cursor-pointer active:bg-primary"
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
