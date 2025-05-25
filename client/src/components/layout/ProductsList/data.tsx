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
    family: ["Comfort Air", "Soft Line", "Ortho Recovery"][i % 3],
    category: [
      "Órtese Soft Curta com Polegar",
      "Órtese Soft Curta sem Polegar",
      "Órtese Soft Curta com Polegar",
      "Órtese Safe Air",
    ][i % 4],
  };
});
