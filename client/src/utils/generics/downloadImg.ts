import { jsPDF } from "jspdf";

export const toDataURL = (url: string): Promise<string> =>
  fetch(url)
    .then((r) => r.blob())
    .then(
      (blob) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        }),
    );

export async function downloadBrochure(product: {
  title: string;
  code: string;
  images: string[];
  isNew?: boolean;
  family?: string;
  category?: string;
}) {
  const doc = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });

  doc.setFontSize(18);
  doc.text(product.title, 40, 60);

  doc.setFontSize(12);
  doc.text(`Código: ${product.code}`, 40, 80);

  const pageHeight = doc.internal.pageSize.getHeight();
  const imgW = 160;
  const imgH = 160;
  const gap = 20;

  let y = 110;

  for (const url of product.images) {
    const img = await toDataURL(url);

    if (y + imgH > pageHeight - 40) {
      doc.addPage();
      y = 40;
    }

    doc.addImage(img, "PNG", 40, y, imgW, imgH);
    y += imgH + gap;
  }

  doc.text(`Família: ${product.family ?? "-"}`, 40, y + 10);
  doc.text(`Categoria: ${product.category ?? "-"}`, 40, y + 30);

  doc.save(`${product.code}.pdf`);
}
