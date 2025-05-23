import React from "react";
import { v4 as uuidv4 } from "uuid";

export interface LinkItem {
  label: string;
  href: string;
}

export interface LinkSectionProps {
  title?: string;
  links: LinkItem[];
  className?: string;
}

const LinkSection: React.FC<LinkSectionProps> = ({
  title,
  links,
  className = "",
}) => {
  return (
    <section className={`leading-relaxed ${className}`}>
      {title && (
        <h4 className="mb-3 font-roboto font-medium text-white">{title}</h4>
      )}
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={uuidv4()}>
            <a
              href={link.href}
              className="font-roboto font-normal text-tertiary hover:underline"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LinkSection;
