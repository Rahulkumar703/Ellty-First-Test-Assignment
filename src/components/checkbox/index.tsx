import { Check } from "lucide-react";
import type { InputHTMLAttributes } from "react";
import styles from "./checkbox.module.css";

const Checkbox = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="relative group rounded-md">
      <input type="checkbox" className={styles.checkbox} {...props} />
      <Check className={styles.checkIcon} strokeWidth={1} />
    </div>
  );
};

export default Checkbox;
