import clsx from "clsx";
import type { ReactNode } from "react";

interface LinearEffectImgProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  children?: ReactNode;
  className?: string;
}

const LinearEffectImg = ({
  src,
  children,
  className,
  ...props
}: LinearEffectImgProps) => {
  return (
    <div
      className={clsx("relative w-full overflow-hidden", className)}
      {...props}
    >
      <img
        src={src}
        alt="Imagem de fundo"
        className={clsx(
          "absolute inset-0 h-full w-full object-cover",
          "[filter:contrast(140%)_brightness(105%)]",
        )}
      />

      <div
        className={clsx(
          "absolute inset-0",
          "bg-[linear-gradient(to_right,rgba(255,255,255,1)_0%,rgba(128,39,108,0.4)_100%)]",
        )}
      />

      <div className="relative z-10 flex h-full w-full">{children}</div>
    </div>
  );
};

export default LinearEffectImg;
