import { useState } from "react";

import { useProductStore } from "../../../store/useProductStore";
import { FilterSection } from "./components/FilterSection";
import { categoriesList, familiesList, isNewList } from "./data";

export const FilterSidebar = () => {
  const { filters, setIsNew, toggleFamily, toggleCategory, resetFilters } =
    useProductStore();

  const [openNew, setOpenNew] = useState(false);
  const [openFam, setOpenFam] = useState(false);
  const [openCat, setOpenCat] = useState(false);

  const isFilterActive =
    filters.families.length > 0 ||
    filters.categories.length > 0 ||
    filters.isNew !== undefined ||
    (!!filters.search && filters.search.trim() !== "");

  return (
    <aside className="w-full md:max-w-[240px] 2xl:max-w-1/4 rounded-lg p-4 flex flex-col gap-0 font-raleway text-base font-medium">
      <div className="flex items-center justify-between border rounded-t-lg border-[#D5D7D8] p-4">
        <h2 className="">Filtros</h2>
        {isFilterActive && (
          <button
            onClick={resetFilters}
            className="text-xs text-primary underline hover:text-primary/80 cursor-pointer"
            type="button"
            title="Limpar filtros"
            aria-label="Limpar filtros"
          >
            Limpar
          </button>
        )}
      </div>

      <FilterSection
        title="Lançamentos"
        isOpen={openNew}
        onToggle={() => setOpenNew((v) => !v)}
      >
        {isNewList.map((item) => (
          <label key={item.label} className="flex items-center gap-2 px-2">
            <input
              type="checkbox"
              checked={filters.isNew === item.value}
              onChange={() =>
                setIsNew(filters.isNew === item.value ? undefined : item.value)
              }
            />
            <span>{item.label}</span>
          </label>
        ))}
      </FilterSection>

      <FilterSection
        title="Famílias/Tecnologias"
        isOpen={openFam}
        onToggle={() => setOpenFam((v) => !v)}
      >
        <div className="flex flex-col gap-2">
          {familiesList.map((family) => (
            <label key={family} className="flex items-center gap-2 px-2">
              <input
                type="checkbox"
                checked={filters.families.includes(family)}
                onChange={() => toggleFamily(family)}
              />
              <span>{family}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection
        title="Produtos"
        isOpen={openCat}
        onToggle={() => setOpenCat((v) => !v)}
        className="border-b-0"
      >
        <div className="flex flex-col gap-2">
          {categoriesList.map((category) => (
            <label key={category} className="flex items-center gap-2 px-2">
              <input
                type="checkbox"
                checked={filters.categories.includes(category)}
                onChange={() => toggleCategory(category)}
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </FilterSection>
    </aside>
  );
};
