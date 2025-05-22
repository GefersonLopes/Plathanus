const Header = () => {
  return (
    <header className="w-full relative">
      <div className="h-[280px] w-full overflow-hidden">
        <img
          src="/assets/cover.jpg"
          alt="Capa"
          width={1920}
          height={1080}
          className="object-cover w-full h-full max-h-[280px] rotate-360"
        />
      </div>

      <div className="absolute top-40 left-1/2 -translate-x-1/2">
        <div className="w-[232px] h-[232px] rounded-full overflow-hidden">
          <img
            src="/assets/profile.jpg"
            alt="Avatar"
            width={160}
            height={160}
            className="object-cover object-[center_40%]  w-full h-full"
          />
        </div>
      </div>

      <div className="pt-20 pt-30 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase">
          Emilly Melhor
        </h1>
        <p className="mt-1 text-sm sm:text-base text-gray-400">
          CONHEÇA O MELHOR DE MIM! 😉
        </p>
      </div>
    </header>
  );
};

export default Header;
