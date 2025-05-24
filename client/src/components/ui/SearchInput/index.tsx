import clsx from "clsx";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";

import type { SearchInputProps } from "./types";

const SearchInput = forwardRef<
  HTMLInputElement,
  Omit<SearchInputProps, "onDrag">
>(({ placeholder = "", size = "md", className, ...props }) => {
  const sizeClasses: Record<string, string> = {
    sm: "h-7 w-40 md:w-56",
    md: "h-9 w-56 md:w-72",
    lg: "h-11 w-72 md:w-96",
  };

  const [open, setOpen] = useState(props?.open ?? false);

  const handleBlur = () => setOpen(false);

  return (
    <motion.form
      layout
      className="relative flex items-center w-full"
      onSubmit={(e) => e.preventDefault()}
    >
      <motion.input
        type="search"
        initial={{ width: 0, opacity: 0, marginRight: 0 }}
        animate={
          open
            ? {
                width: "100%",
                opacity: 1,
                pointerEvents: "auto",
                marginRight: 8,
              }
            : {
                width: 0,
                opacity: 0,
                pointerEvents: "none",
                marginRight: -40,
              }
        }
        transition={{ type: "spring", stiffness: 250, damping: 30 }}
        onBlur={!props?.open ? handleBlur : undefined}
        className={clsx(
          "mr-2 rounded-full bg-white px-3 py-1 text-sm",
          "text-gray-700 placeholder-gray-400 focus:none focus:ring-1 focus:ring-gray-300",
          "focus:ring-2 focus:ring-primary-500",
          "border border-gray-300 shadow-sm",
          sizeClasses[size],
          className,
        )}
        {...props}
        onFocus={() => setOpen(true)}
        placeholder={placeholder}
      />

      <button
        type="button"
        aria-label={open ? "Fechar busca" : "Abrir busca"}
        className={clsx(
          "grid h-10 w-10 place-items-center rounded-full",
          "bg-gray-100 text-quaternary hover:bg-gray-200",
        )}
        onClick={() => {
          setOpen(() => true);
        }}
      >
        <RiSearchLine size={14} />
      </button>
    </motion.form>
  );
});

SearchInput.displayName = "SearchInput";
export default SearchInput;
