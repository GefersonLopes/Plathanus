import { useState } from "react";

import { FilterSection } from "../FilterSidebar/components/FilterSection";
import type { ProductDetailsProps } from "../ProductDetails";

const ProductAbout = ({
  level,
  indication,
  title,
  line,
  code,
  family,
}: ProductDetailsProps) => {
  const [openDetails, setOpenDetails] = useState(true);
  const [openTechnicalSpecs, setOpenTechnicalSpecs] = useState(false);
  const [openIndications, setOpenIndications] = useState(false);
  const [openGuarantee, setOpenGuarantee] = useState(false);

  const noContent = (
    <section className="font-normal text-base text-dark font-medium font-raleway space-y-4 px-4">
      Nenhuma informação preenchida
    </section>
  );

  const baseP = "font-normal text-base text-quaternary font-medium";
  const emphasis = "font-normal";

  const sections = [
    {
      title: "Detalhes",
      isOpen: openDetails,
      onToggle: () => setOpenDetails((v) => !v),
      content: (
        <section className="font-normal text-base text-dark font-raleway space-y-4 px-4">
          <p>
            Nível {level} – {indication}
          </p>

          <p className={baseP}>
            Nome Comercial: <span className={emphasis}>{title}</span>
          </p>

          <p className={baseP}>
            Linha: <span className={emphasis}>{line}</span>
          </p>

          <p className={baseP}>
            Cod. Produto (referências/SKU):{" "}
            <span className={emphasis}>{code}</span>
          </p>

          <p className={baseP}>
            Família de Produtos: <span className={emphasis}>{family}</span>
          </p>

          <p className={baseP}>
            Modelos do produto (esquerda/direita – bilateral):{" "}
            <span className={emphasis}>{title}</span>
          </p>

          <p className={baseP}>
            Composição:{" "}
            <span className={emphasis}>
              74% borracha de cloropreno, 16% poliamida, 9% poliestireno e 1%
              PVC.
            </span>
          </p>

          <p className={`${baseP} uppercase`}>PRODUTO TÉRMICO</p>
        </section>
      ),
    },
    {
      title: "Especificações Técnicas",
      isOpen: openTechnicalSpecs,
      onToggle: () => setOpenTechnicalSpecs((v) => !v),
      content: noContent,
    },
    {
      title: "Indicações",
      isOpen: openIndications,
      onToggle: () => setOpenIndications((v) => !v),
      content: noContent,
    },
    {
      title: "Garantia",
      isOpen: openGuarantee,
      onToggle: () => setOpenGuarantee((v) => !v),
      content: noContent,
    },
  ];

  return (
    <section className="mt-4 border-t border-[#D5D7D8]">
      {sections.map((section) => (
        <FilterSection
          key={section.title}
          title={section.title}
          isOpen={section.isOpen}
          onToggle={section.onToggle}
          className="bg-white"
        >
          {section.content}
        </FilterSection>
      ))}
    </section>
  );
};

export default ProductAbout;
