import clsx from "clsx";
import { RiArrowRightSLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className }) => {
  return (
    <nav
      className={clsx(
        "flex items-center space-x-1 font-raleway text-base text-[#989D9E] text-medium",
        className,
      )}
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={item.href} className="flex items-center space-x-1">
            {index > 0 && (
              <RiArrowRightSLine className="text-dark shrink-0" size={16} />
            )}
            {isLast ? (
              <span className="text-dark">{item.label}</span>
            ) : (
              <NavLink to={item.href} className="hover:underline transition">
                {item.label}
              </NavLink>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
