import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiYoutubeFill,
} from "react-icons/ri";

const dataFooter = {
  sections: [
    {
      title: "Institucional",
      links: [
        { label: "Sobre nós", href: "/sobre" },
        { label: "Trabalhe conosco", href: "/carreiras" },
      ],
    },
    {
      title: "Download de Catálogos",
      links: [
        { label: "Catálogo geral", href: "#" },
        { label: "Linha Orthopedic", href: "#" },
        { label: "Linha Sports", href: "#" },
        { label: "Linha Special Cares", href: "#" },
        { label: "Catálogo Foot Care", href: "#" },
        { label: "Catálogo Acessibilidade", href: "#" },
      ],
    },
    {
      title: "Linhas de produtos",
      links: [
        { label: "Orthopaedic", href: "#" },
        { label: "Sports", href: "#" },
        { label: "Special Cares", href: "#" },
      ],
    },
  ],
  contacts: {
    phone: "+55 48 3333-3333",
    emails: ["sac@loremipsum.com.br ou rp@loremipsum.com.br"],
  },
  socials: [
    { href: "https://instagram.com", icon: RiInstagramFill },
    { href: "https://youtube.com", icon: RiYoutubeFill },
    { href: "https://facebook.com", icon: RiFacebookCircleFill },
  ],
  address: "Av dos Butiá, 150 - Florianopolis - SC - Brasil",
  bottomNote: "© 2023 Lorem Ipsum. Todos os direitos reservados.",
};

export default dataFooter;
