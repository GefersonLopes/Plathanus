import React from "react";
import { RiMailFill, RiPhoneFill } from "react-icons/ri";

import FooterIcon from "../Icon";

export interface ContactInfoProps {
  phone?: string;
  emails?: string[];
  className?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  phone,
  emails,
  className = "",
}) => {
  return (
    <address className={`not-italic leading-relaxed ${className}`}>
      <h4 className="mb-3 font-roboto font-medium text-white">
        Entre em contato e tire suas dúvidas
      </h4>

      {phone && (
        <div className="flex items-center space-x-2">
          <FooterIcon icon={RiPhoneFill} />
          <span>{phone}</span>
        </div>
      )}

      {emails?.map((email) => (
        <p key={email} className="flex items-center space-x-2">
          <FooterIcon icon={RiMailFill} />
          <span className="max-w-[260px] break-words whitespace-normal">
            {email}
          </span>
        </p>
      ))}
    </address>
  );
};

export default ContactInfo;
