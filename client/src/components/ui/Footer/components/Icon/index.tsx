import clsx from "clsx";

import type { FooterIconProps } from "./types";

const FooterIcon: React.FC<FooterIconProps> = ({ icon: Icon, className }) => (
  <button
    className={clsx(
      "p-[6px] rounded-full border border-primary",
      "hover:bg-gray-500/30 transition",
      className,
    )}
  >
    <Icon className="shrink-0" color="#e57200" fontSize={14} />
  </button>
);

export default FooterIcon;
