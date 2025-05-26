import clsx from "clsx";
import { useState } from "react";
import { GoDownload } from "react-icons/go";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Button from "../../ui/Button";
import RenderIMG from "../RenderIMG";

interface ImageCarouselProps {
  images: string[];
  download?: () => void;
}

export default function ImageCarousel({
  images,
  download,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="select-none max-w-[550px]">
      <main className="">
        <RenderIMG images={images} currentIndex={currentIndex} />

        <div className="flex items-center justify-between gap-4 mt-4">
          <IoIosArrowBack
            size={25}
            className="text-[#D5D7D8] cursor-pointer"
            onClick={() => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0))}
          />
          <div className="w-full flex items-center gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {images.map((src, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                }}
                className={clsx(
                  "flex-shrink-0 w-[90px] h-16 rounded overflow-hidden transition-opacity",
                  idx === currentIndex
                    ? "border-b-4  border-primary opacity-100"
                    : "opacity-50 hover:opacity-100",
                )}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          <IoIosArrowForward
            size={25}
            className="text-[#D5D7D8] cursor-pointer"
            onClick={() =>
              setCurrentIndex((prev) =>
                images.length > prev + 1 ? prev + 1 : images.length - 1,
              )
            }
          />
        </div>
      </main>

      <div className="mt-4">
        <Button
          className="inline-flex items-center font-raleway font-medium text-base gap-2 !text-primary !bg-transparent hover:underline"
          onClick={download}
        >
          Baixar Folder do Produto
          <GoDownload size={16} />
        </Button>
      </div>
    </div>
  );
}
