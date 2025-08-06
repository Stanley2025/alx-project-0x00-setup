import { ButtonProps } from "@/interfaces";
import React from "react";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  const buttonClasses = `px-5 py-2 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${styles}`;

  return (
    <button className={buttonClasses}>
      {title}
    </button>
  );
};

export default Button;