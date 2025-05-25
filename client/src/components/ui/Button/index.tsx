import clsx from "clsx";

import type { ButtonProps } from "./types";

export default function Button({
  variant = "primary",
  size = "md",
  type = "button",
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "rounded-lg font-medium focus:outline-none focus-visible:ring text-poppins cursor-pointer";
  const disabled =
    "disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:bg-gray-300";
  const variants: Record<string, string> = {
    primary:
      "bg-primary font-light text-white hover:bg-primary/80 focus-visible:ring-primary/60",
    secondary:
      "bg-secondary font-light text-white hover:bg-secondary/80 focus-visible:ring-secondary/60",
    tertiary:
      "bg-tertiary font-light text-white hover:bg-tertiary/80 focus-visible:ring-tertiary/60",
    custom: "",
  };
  const sizes: Record<string, string> = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-1.5 text-sm",
    lg: "px-6 py-2 text-base",
  };

  return (
    <button
      type={type}
      className={clsx(
        base,
        variants[variant],
        sizes[size],
        disabled,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
