import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

interface FilterSectionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
  className?: string;
}

export const FilterSection = ({
  title,
  isOpen,
  onToggle,
  children,
  className,
}: FilterSectionProps) => (
  <div className="rounded-b-md bg-gray-50">
    <button
      onClick={onToggle}
      className={clsx(
        "p-4 flex items-center justify-between",
        "w-full border-b border-[#D5D7D8]",
        className,
      )}
    >
      <h3 className="font-medium cursor-pointer">{title}</h3>
      <span className="text-sm cursor-pointer">
        {isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
      </span>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="content"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ overflow: "hidden" }}
        >
          <div className="py-2 bg-gray-50">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);
