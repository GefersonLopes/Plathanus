import clsx from "clsx";
import { useEffect, useMemo, useState } from "react";

import { useProductStore } from "../../../store/useProductStore";
import Button from "../../ui/Button";
import Pagination from "../../ui/Pagination";
import SearchInput from "../../ui/SearchInput";
import { FilterSidebar } from "../FilterSidebar";
import ProductCard from "../ProductCard";
import { products } from "./data";

const ProductsList = () => {
  const itemsPerPage = 9;

  const { filters, setSearch } = useProductStore();

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setCurrentPage(0);
  }, [filters]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesNew = filters.isNew ? product.isNew : true;

      const matchesFamily =
        filters.families.length > 0
          ? filters.families.includes(product.family)
          : true;

      const matchesCategory =
        filters.categories.length > 0
          ? filters.categories.includes(product.category)
          : true;

      const matchesSearch = filters.search
        ? product.title.toLowerCase().includes(filters.search.toLowerCase())
        : true;

      return matchesNew && matchesFamily && matchesCategory && matchesSearch;
    });
  }, [filters]);

  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

  const paginatedProducts = filteredProducts.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage,
  );

  const handlePageChange = (selected: number) => {
    setCurrentPage(selected);
  };

  const handleDownloadCatalog = () => {
    const content = paginatedProducts
      .map((p) => `- ${p.title} | Código: ${p.code}`)
      .join("\n");

    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "catalogo-pagina.txt";
    link.click();
  };

  return (
    <section className="w-full min-h-screen bg-white">
      <div className="max-w-[1400px] 2xl:max-w-[100%] px-4 md:px-16 py-6 flex flex-col md:flex-row gap-6">
        <FilterSidebar />

        <div className="flex-1">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-8">
              <span className="text-dark font-raleway text-sm font-bold flex items-center gap-1 bg-gray-50 px-2 py-2 rounded-md">
                <span>{filteredProducts.length}</span> <span>produtos</span>
              </span>
              <SearchInput
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar produto"
              />
            </div>
            <Button
              onClick={handleDownloadCatalog}
              className={clsx(
                "bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90",
              )}
              disabled={paginatedProducts.length === 0}
            >
              Baixar Catálogo
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.code} {...product} />
            ))}
            {filteredProducts.length === 0 && (
              <p className="text-gray-500 text-center col-span-3 mt-40">
                Nenhum produto encontrado.
              </p>
            )}
          </div>

          {filteredProducts.length > 0 && (
            <Pagination
              pageCount={pageCount}
              onPageChange={handlePageChange}
              forcePage={currentPage}
              className="mt-10"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductsList;
