import { useParams } from "react-router-dom";

import ImageCarousel from "../components/layout/ImageCarousel";
import ProductAbout from "../components/layout/ProductAbout";
import ProductDetails from "../components/layout/ProductDetails";
import ProductsCarousel from "../components/layout/ProductsCorrousel";
import { products } from "../components/layout/ProductsList/data";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import VideoThumbnail from "../components/ui/Video";
import { downloadBrochure } from "../utils/generics/downloadImg";

const breadcrumbItems = [
  { label: "Início", href: "/" },
  { label: "Linha Orthopedic", href: "#orthopedic" },
];

const ProductPage = () => {
  const { code } = useParams();
  const product = products.find((p) => p.code === code);
  const listImages = [
    "/assets/carousel/one.png",
    "/assets/carousel/two.png",
    "/assets/carousel/three.png",
    "/assets/carousel/four.png",
  ];
  const handleDownload = () =>
    product &&
    downloadBrochure({ ...product, images: [product.image, ...listImages] });

  return (
    <section className="p-4 md:px-16">
      <div className="mb-6 flex justify-center">
        <Breadcrumbs
          items={breadcrumbItems}
          className="w-full max-w-[1332px]"
        />
      </div>
      <div className="flex flex-col lg:flex-row w-full justify-center gap-4">
        <ImageCarousel
          images={[product?.image || "", ...listImages]}
          download={handleDownload}
        />
        <ProductDetails {...product} title="Órtese Splint Bilateral" />
      </div>
      <VideoThumbnail
        src="/assets/covers/thumb.png"
        alt="Vídeo de apresentação do produto"
        className="w-full h-auto mt-6 mb-4"
      />
      <ProductAbout {...product} title="Órtese Splint Bilateral" />
      <ProductsCarousel
        heading="Conheça também nossos outros produtos"
        products={products.filter((p) => p.code !== code)}
      />
    </section>
  );
};

export default ProductPage;
