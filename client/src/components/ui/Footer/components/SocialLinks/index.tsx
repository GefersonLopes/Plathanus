import React from "react";

import type { Social } from "../../types";
import FooterIcon from "../Icon";

export interface SocialLinksProps {
  title?: string;
  socials: Social[];
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  title = "Nos acompanhe também nas redes:",
  socials,
  className = "",
}) => {
  return (
    <section className={`leading-relaxed ${className}`}>
      <h4 className="mb-3 max-w-[181px] font-roboto text-base font-medium text-white">
        {title}
      </h4>

      <ul className="flex flex-wrap gap-2">
        {socials.map((social) => (
          <li key={social.href}>
            <a
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FooterIcon className="cursor-pointer" icon={social.icon} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SocialLinks;
