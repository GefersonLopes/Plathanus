import clsx from "clsx";

const Logo = ({ className }: { className?: string }) => {
  return (
    <a
      aria-label="Página inicial"
      className={clsx("flex-shrink-0 text-quaternary", className)}
      href="/"
    >
      <span className="text-3xl font-medium font-raleway cursor-pointer">
        LOGO
      </span>
    </a>
  );
};

export default Logo;
