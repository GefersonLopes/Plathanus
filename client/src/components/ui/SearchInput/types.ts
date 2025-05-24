import type { HTMLMotionProps } from "framer-motion";
import type { InputHTMLAttributes } from "react";

export type SearchInputProps = InputHTMLAttributes<HTMLInputElement> &
  HTMLMotionProps<"input"> & {
    size?: "sm" | "md" | "lg";
    open?: boolean;
  };
