import React from 'react'

function Button({
    children,
    className = "",
    ...props
}) {
  return (
    <button 
    className={`text-xl font-semibold px-3 py-2 text-[#202020] bg-zinc-200 border-[1px] border-[#202020] transition duration-150 ease-in hover:bg-black hover:text-white dark:hover:text-white dark:hover:bg-black dark:text-yellow-400 dark:bg-transparent dark:border-yellow-400 ${className}`}
    {...props}
    >
        {children}
    </button>
  )
}

export default Button