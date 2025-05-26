import React from "react";

export interface HighlightBox {
  title?: string;
  image?: string;
  description: string;
}

export interface QualitySectionProps {
  note?: string;
  productImage: string;
  productImageAlt?: string;
}

const QualitySection: React.FC<QualitySectionProps> = ({
  note = "",
  productImage,
  productImageAlt = "",
}) => {
  return (
    <section className="flex flex-col gap-4 font-raleway mt-8">
      <h2 className="max-w-[451px] text-quaternary text-3xl font-medium">
        Fabricação <span className="font-bold text-primary">própria</span> e
        nacional. <span className="font-bold text-primary">Qualidade</span>{" "}
        garantida!
      </h2>
      <p className="max-w-[400px] text-base text-[#707372] font-medium">
        {note}
      </p>
      <img src={productImage} alt={productImageAlt} />
    </section>
  );
};

export default QualitySection;
