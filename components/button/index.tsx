import React from "react";

const Button = ({
  className,
  children,
}: {
  className?: string;
  children: any;
}) => {
  return (
    <button className="group inline-flex h-8 items-center gap-2.5 rounded-md bg-zinc-950 px-3 transition-all duration-500 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-sm tracking-wide text-white">
      {children}
    </button>
  );
};

export default Button;
