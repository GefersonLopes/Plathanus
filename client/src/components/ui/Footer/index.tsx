import clsx from "clsx";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const Footer = ({
  logo,
  sections = [],
  socialLinks = [],
  className = "",
}: {
  logo?: React.ReactNode;
  sections?: {
    title?: string;
    links: { label: string; href: string }[];
  }[];
  socialLinks?: { href: string; icon: React.ReactNode }[];
  className?: string;
}) => {
  return (
    <footer className={clsx("w-full bg-tertiary text-primary py-8", className)}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {logo && (
          <div
            className="mb-6 md:mb-0 flex items-center cursor-pointer"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            {typeof logo === "string" ? (
              <img
                src={logo}
                alt="Logo"
                className="h-50 object-fit rounded-full"
              />
            ) : (
              logo
            )}
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-6 md:mb-0 space-x-4">
          {sections.map((section) => (
            <div key={uuidv4()}>
              {section.title && (
                <h3 className="font-semibold mb-4">{section.title}</h3>
              )}
              <ul>
                {section.links.map((link) => (
                  <li key={uuidv4()} className="mb-2">
                    <a href={link.href} className="hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {socialLinks.length > 0 && (
          <div className="flex space-x-1 items-center">
            {socialLinks.map((social) => (
              <a
                key={uuidv4()}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                {social.icon}
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
