import React from "react";
import Checkbox from "./checkbox";

type Props = {
  id: number;
  title: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ListItem = ({
  id,
  title,
  checked = false,
  disabled = false,
  onChange = () => {},
}: Props) => {
  return (
    <li>
      <label
        htmlFor={`checkbox-${id}`}
        className="py-[8px] pr-[15px] pl-[22px] text-sm flex items-center justify-between cursor-pointer w-full h-[42px]"
      >
        <span className={`${disabled ? "text-muted" : "text-foreground"}`}>
          {title}
        </span>
        <Checkbox
          id={`checkbox-${id}`}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
      </label>
    </li>
  );
};

export default ListItem;
