import { countries } from "../../../utils/data/country";
import NavLink from "../../layout/NavLink";
import Button from "../Button";
import Logo from "../Logo";
import SearchInput from "../SearchInput";
import { Select } from "../Select";
import { navItems } from "./data";

export default function Header() {
  return (
    <header className="w-full">
      <div className="mx-auto flex max-w-[1200px] h-[51px] items-center justify-between gap-6 px-4 py-10">
        <Logo />

        <nav aria-label="Site" className="hidden gap-10 lg:flex items-center">
          {navItems.map(({ to, label }) => (
            <NavLink key={to} to={to} label={label} />
          ))}
          <SearchInput placeholder="Pesquisar" />
        </nav>

        <div className="flex items-center gap-4">
          <aside className="flex items-center gap-2">
            <Button variant="primary" className="py-2">
              Fale conosco
            </Button>
            <form className="flex items-center gap-2 w-6">
              <Select
                id="currency"
                label=""
                defaultValue="BR"
                className=" space-x-[-20px] text-white"
                options={countries}
              />
            </form>
          </aside>
        </div>
      </div>
    </header>
  );
}
