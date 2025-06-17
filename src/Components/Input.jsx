import React, { useId } from "react";

function Input({ label, className = "", type = "text", ...props }, ref) {
  const id = useId();

  return (
    <div className="w-full flex items-center gap-4">
      {label && (
        <label
          className="text-lg font-medium text-[var(--bgColor)] dark:text-white"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        className={`w-full px-3 py-2 border-[1px] text-[var(--hoverBtnColor)] border-[#202020] bg-[var(--bgColor)] rounded-[var(--inputRadius)] dark:bg-[var(--bgColor)] focus:outline-none ${className}`}
        type={type}
        id={id}
        ref={ref}
        {...props}
      />
    </div>
  );
}

export default React.forwardRef(Input);
