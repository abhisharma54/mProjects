import React, { useId } from "react";

function Input({ label, className = "", type = "text", ...props }, ref) {
  const id = useId();

  return (
    <div className="w-full flex items-center gap-4">
      {label && (
        <label
          className="text-lg font-medium text-[#202020] dark:text-white"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        className={`w-full px-3 py-2 border-[1px] text-black border-[#202020] bg-zinc-100 rounded-[var(--inputRadius)] dark:bg-black dark:text-white dark:border-yellow-400 focus:outline-none ${className}`}
        type={type}
        id={id}
        ref={ref}
        {...props}
      />
    </div>
  );
}

export default React.forwardRef(Input);
