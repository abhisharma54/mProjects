import React from "react";

function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`text-xl font-semibold px-3 py-2 text-[var(--textColor)] bg-[var(--bgBtnColor)] rounded-[var(--inputRadius)] transition duration-150 ease-in hover:bg-[var(--hoverBtnColor)] hover:text-white dark:text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
