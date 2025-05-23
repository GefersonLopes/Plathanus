import clsx from "clsx";
import { NavLink as NavLinkDom } from "react-router-dom";

import type { NavLinkProps } from "./types";

const NavLink = ({ to, label, className, ...props }: NavLinkProps) => {
  return (
    <NavLinkDom
      key={to}
      to={to}
      className={clsx(
        "font-raleway text-base text-quarternary hover:underline",
        className,
      )}
      {...props}
    >
      {label}
    </NavLinkDom>
  );
};
export default NavLink;
