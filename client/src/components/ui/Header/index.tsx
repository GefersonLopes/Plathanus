import { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

import { countries } from "../../../utils/data/country";
import NavLink from "../../layout/NavLink";
import Button from "../Button";
import Logo from "../Logo";
import SearchInput from "../SearchInput";
import { Select } from "../Select";
import { navItems } from "./data";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-sm">
      <div className="mx-auto flex max-w-[1200px] items-center md:justify-between px-4 py-4">
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
        </button>

        <Logo className="w-[90%] lg:w-auto flex items-center justify-center lg:justify-start" />

        <nav aria-label="Site" className="hidden lg:flex items-center gap-10">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              label={label}
              className="min-w-[80px] text-center"
            />
          ))}
          <SearchInput placeholder="Pesquisar" />
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="primary" className="py-2">
            Fale conosco
          </Button>

          {!menuOpen && (
            <Select
              id="currency"
              label=""
              defaultValue="BR"
              className="text-white me-8 xl:me-0"
              options={countries}
            />
          )}
        </div>
      </div>

      {menuOpen && (
        <nav
          aria-label="Mobile Menu"
          className="lg:hidden px-4 pb-4 flex flex-col gap-4 animate-slide-down"
        >
          <div className="flex flex-col items-center gap-3">
            <SearchInput placeholder="Pesquisar" open className="w-full" />
            <Button variant="primary" className="py-2 w-full">
              Fale conosco
            </Button>
          </div>
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              label={label}
              className="text-gray-700"
              onClick={() => setMenuOpen(false)}
            />
          ))}

          <Select
            id="currency"
            label=""
            defaultValue="BR"
            className="text-white flex justify-end items-end pe-5 w-full"
            options={countries}
          />
        </nav>
      )}
    </header>
  );
}
