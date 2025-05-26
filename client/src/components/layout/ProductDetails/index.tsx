import clsx from "clsx";
import { IoIosResize } from "react-icons/io";
import { LiaTapeSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

import Button from "../../ui/Button";

interface ColorOption {
  name: string;
  hex: string;
}

interface LinkOption {
  label: string;
  href: string;
}

export interface ProductDetailsProps {
  brand?: string;
  title?: string;
  code?: string;
  description?: string;
  level?: string | number;
  indication?: string;
  colors?: ColorOption[];
  model?: string;
  sizes?: string[];
  extraLinks?: LinkOption[];
  cta?: LinkOption;
  secondaryLink?: LinkOption;
  family?: string;
  line?: string;
}

export default function ProductDetails({
  brand,
  title,
  code,
  description,
  level,
  indication,
  colors = [],
  model,
  sizes = [],
  extraLinks = [],
  cta,
  secondaryLink,
}: ProductDetailsProps) {
  const navigate = useNavigate();

  return (
    <section className="max-w-3xl font-raleway text-dark space-y-6 mt-8 lg:mt-0 mb-8">
      <header className="space-y-3 mt-[-20px]">
        <p className="text-base font-medium tracking-wide uppercase text-quaternary">
          {brand}
        </p>
        <h1 className="bg-secondary text-4xl sm:text-5xl leading-snug font-bold text-white p-2 rounded-md">
          {title}
        </h1>

        <p className="text-sm text-[#707372] space-x-2 font-roboto">
          <span>
            Código SKU {code}{" "}
            <span className="hidden sm:inline">Lado direito</span>
          </span>
          <span>/</span>
          <span>
            Código SKU {code}{" "}
            <span className="hidden sm:inline">Lado esquerdo</span>
          </span>
        </p>
      </header>

      <section>
        <h2 className="font-medium mb-2">Descrição</h2>
        <p className="whitespace-pre-line font-normal text-justify leading-5.5 text-base text-quaternary">
          {description}
        </p>
      </section>

      {(level || indication) && (
        <section className="space-y-1">
          {level && (
            <p className="font-normal text-base text-dark">Nível {level}</p>
          )}
          {indication && (
            <p className="font-normal text-base text-quaternary">
              {indication}
            </p>
          )}
        </section>
      )}

      <hr className="border-0 border-t border-[#AEB7B9]" />

      <div className="space-y-4">
        {colors.length > 0 && (
          <div className="flex items-center space-x-3 flex-wrap text-sm">
            <span className="font-normal text-base text-dark">
              Cores disponíveis:
            </span>
            {colors.map((c) => (
              <span
                key={c.name}
                className="flex items-center space-x-1.5 font-normal text-base text-quaternary"
              >
                <span
                  className="inline-block w-4 h-4 rounded-full border"
                  style={{ backgroundColor: c.hex }}
                />
                <span>{c.name}</span>
              </span>
            ))}
          </div>
        )}

        {model && (
          <p className="text-sm flex items-center space-x-2 flex-wrap">
            <span className="font-normal text-base text-dark mr-1.5">
              Modelo:
            </span>{" "}
            <p className="font-normal text-base text-quaternary">{model}</p>
          </p>
        )}

        {sizes.length > 0 && (
          <p className="text-sm flex items-center space-x-2 flex-wrap">
            <span className="font-normal text-base text-dark mr-3">
              Tamanhos disponíveis:
            </span>
            {sizes.map((s) => (
              <span
                key={s}
                className="font-normal text-sm text-quaternary bg-[#EBEBEB] px-2 py-0.5 rounded-md"
              >
                {s}
              </span>
            ))}
          </p>
        )}

        {extraLinks.length > 0 && (
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-1 sm:space-y-0 text-sm">
            {extraLinks.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                className={clsx(
                  "flex items-center space-x-1 hover:underline font-normal text-sm",
                  i === 0 ? "text-primary" : "text-gray-700",
                )}
              >
                {i === 0 ? <IoIosResize /> : <LiaTapeSolid />}{" "}
                <span>{l.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>

      {cta && (
        <div>
          <Button
            onClick={() => navigate(cta.href)}
            className="w-full md:max-w-[178px] !py-3 !px-0 rounded-xl"
          >
            {cta.label}
          </Button>
        </div>
      )}

      {secondaryLink && (
        <div>
          <a
            href={secondaryLink.href}
            className="text-quaternary font-normal text-base underline hover:text-gray-900"
          >
            {secondaryLink.label}
          </a>
        </div>
      )}
    </section>
  );
}
