import clsx from "clsx";
import React from "react";
import { v4 as uuidv4 } from "uuid";

import { countries } from "../../../utils/data/country";
import Logo from "../Logo";
import { Select } from "../Select";
import ContactInfo from "./components/ContactInfo";
import LinkSection from "./components/LinkSection";
import SocialLinks from "./components/SocialLinks";
import type { FooterProps } from "./types";

export const Footer: React.FC<FooterProps> = ({
  sections = [],
  contacts,
  socials = [],
  bottomNote,
  address,
  className,
}) => (
  <footer className={clsx("w-full bg-quaternary text-gray-200", className)}>
    <section
      className={clsx(
        "w-full md:px-8",
        "flex flex-col lg:flex-row gap-y-10 lg:gap-y-0",
        "px-4 sm:px-6 md:px-0 py-8 sm:py-10",
        "lg:items-start lg:justify-between",
      )}
    >
      <Logo className="lg:px-20 py-5 md:py-0 !text-white" />

      <nav
        aria-label="Mapa de navegação do rodapé"
        className="lg:ml-auto flex flex-col lg:flex-row gap-10 text-base"
      >
        <div
          className={clsx(
            "grid gap-6 md:gap-8 lg:gap-15",
            "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-[repeat(4,auto)]",
            "space-y-6 lg:space-y-0",
          )}
        >
          {sections.map((section) => (
            <LinkSection
              key={uuidv4()}
              title={section.title}
              links={section.links}
            />
          ))}

          <aside className="flex flex-col space-y-4">
            <ContactInfo phone={contacts?.phone} emails={contacts?.emails} />

            {socials.length > 0 && (
              <SocialLinks
                title="Nos acompanhe também nas redes:"
                socials={socials}
              />
            )}
          </aside>
        </div>
      </nav>
    </section>

    <hr className="border-0 border-t border-[#707372]" />

    <section
      className={clsx(
        "flex flex-col sm:flex-row items-center",
        "justify-between gap-4 px-4 sm:px-6 md:px-8 py-4",
      )}
    >
      <form className="flex items-center gap-2">
        <Select
          id="currency"
          label="Selecionar País"
          defaultValue="BR"
          className="lg:px-20 space-x-[-20px] text-white"
          options={countries}
        />
      </form>

      <section className="lg:px-10 text-center md:text-right leading-tight">
        {bottomNote && <p>{bottomNote}</p>}
        {address && <address>{address}</address>}
      </section>
    </section>
  </footer>
);

export default Footer;
