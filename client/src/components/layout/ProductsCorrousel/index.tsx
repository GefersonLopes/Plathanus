import React, { useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import ProductCard from "../ProductCard";

export interface Product {
  title: string;
  code: string;
  image: string;
  isNew?: boolean;
}

export interface ProductsCarouselProps {
  products: Product[];
  heading?: string;
}

const ProductsCarousel: React.FC<ProductsCarouselProps> = ({
  products,
  heading = "Conheça também",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState({ left: false, right: true });

  const updateArrows = () => {
    const el = containerRef.current;
    if (!el) return;
    setCanScroll({
      left: el.scrollLeft > 0,
      right: el.scrollLeft + el.clientWidth < el.scrollWidth,
    });
  };

  const scroll = (direction: "left" | "right") => () => {
    const el = containerRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.9;
    const newPos =
      direction === "left"
        ? el.scrollLeft - scrollAmount
        : el.scrollLeft + scrollAmount;
    el.scrollTo({ left: newPos, behavior: "smooth" });
  };

  return (
    <section className="w-full mt-16 mb-12">
      <header className="flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-raleway font-medium text-quaternary mb-6 px-4 md:px-0 max-w-[353px]">
          {heading.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h2>
        <div className="flex align-center gap-4">
          <button
            onClick={scroll("left")}
            disabled={!canScroll.left}
            className="cursor-pointer flex items-center justify-center bg-white border border-gray-300 shadow-[0_0_5px_rgba(0,0,0,0.5)] w-8 h-8 rounded-full disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-500"
          >
            <FiChevronLeft className="text-xl" />
          </button>
          <button
            onClick={scroll("right")}
            disabled={!canScroll.right}
            className="cursor-pointer flex items-center justify-center bg-white border border-gray-300 shadow-[0_0_5px_rgba(0,0,0,0.5)] w-8 h-8 rounded-full disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-500"
          >
            <FiChevronRight className="text-xl" />
          </button>
        </div>
      </header>

      <div className="relative">
        <div
          ref={containerRef}
          onScroll={updateArrows}
          className="flex gap-8 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-4 md:pb-6 px-4 md:px-0"
        >
          {products.map((p) => (
            <div
              key={p.code}
              className="flex-shrink-0 w-64 md:w-56 lg:w-64 xl:w-72"
            >
              <ProductCard {...p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsCarousel;
