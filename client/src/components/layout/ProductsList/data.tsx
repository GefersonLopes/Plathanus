export const productTypes = [
  {
    title: "Órtese Soft Curta com Polegar",
    image: "/assets/products/Short_Soft_Orthosis_with_Thumb.png",
  },
  {
    title: "Órtese Soft Curta sem Polegar",
    image: "/assets/products/Short_Soft_Orthosis_without_Thumb.png",
  },
  {
    title: "Órtese Soft Curta com Polegar",
    image: "/assets/products/Short_Soft_Orthosis_without_Thumb_2.png",
  },
  {
    title: "Órtese Safe Air",
    image: "/assets/products/Air_Safe_Orthosis.png",
  },
];

export const products = Array.from({ length: 86 }).map((_, i) => {
  const type = productTypes[i % productTypes.length];

  return {
    title: type.title,
    code: `OR10${i.toString().padStart(2, "0")}`,
    image: type.image,
    isNew: i % 2 === 0 && i !== 0,
    line: "Orthopedic",
    family: ["Comfort Air", "Soft Line", "Ortho Recovery"][i % 3],
    category: [
      "Órtese Soft Curta com Polegar",
      "Órtese Soft Curta sem Polegar",
      "Órtese Soft Curta com Polegar",
      "Órtese Safe Air",
    ][i % 4],
    model: "Bilateral",
    brand: "Hidrolight Neo®",
    description:
      "A Órtese Splint Bilateral Hidrolight é feita de neoprene Plush, com propriedades isolantes térmicas e um acabamento elegante em plush. Possui ampla capacidade de ajuste devido à aderência do tecido. Em repouso, a órtese já está pré-ajustada, com fechamento do polegar e uma membrana elástica que funciona como um bolso, facilitando a colocação pelo próprio paciente. As talas internas são facilmente ajustáveis para se adaptarem à mão desejada. São fornecidas duas talas removíveis, uma com curvatura ideal para sustentar o punho até a palma da mão, e a segunda reta na parte dorsal do punho, impedindo movimentos para cima e para baixo. O elástico aderente envolve a articulação, proporcionando compressão de acordo com a indicação médica e a necessidade do paciente.",
    level: i % 3 === 0 ? "1" : i % 3 === 1 ? "2" : "3",
    indication:
      i % 2 === 0
        ? "Recuperação e tratamento de lesões GRAVES"
        : "Recuperação e tratamento de lesões LEVES",
    sizes: ["Único", "Especial"],
    colors: [
      { name: "Preto", hex: "#000000" },
      { name: "Azul", hex: "#0000FF" },
    ].slice(0, (i % 2) + 1),
    extraLinks: [
      {
        label: "Descubra o seu tamanho ideal",
        href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      {
        label: "Tabela de medidas",
        href: "https://example.com/manual",
      },
    ],
    cta: {
      label: "Encontrar lojas online",
      href: `/loja`,
    },
    secondaryLink: {
      label: "Gostou desse produto? Seja um vendedor",
      href: `/contato/seja-vendedor`,
    },
  };
});
