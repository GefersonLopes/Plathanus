export type Link = { label: string; href: string };

export interface Section {
  title?: string;
  links: Link[];
}

export interface Social {
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label?: string;
}

export interface FooterProps {
  logo?: React.ReactNode;
  sections?: Section[];
  contacts?: {
    phone?: string;
    emails?: string[];
  };
  socials?: Social[];
  bottomNote?: React.ReactNode;
  address?: string;
  className?: string;
}
