import { create } from "zustand";

interface ProductFilters {
  isNew: boolean | undefined;
  families: string[];
  categories: string[];
  search: string;
}

interface ProductStore {
  filters: ProductFilters;
  setIsNew: (value: boolean | undefined) => void;
  toggleFamily: (family: string) => void;
  toggleCategory: (category: string) => void;
  setSearch: (value: string) => void;
  resetFilters: () => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  filters: {
    isNew: undefined,
    families: [],
    categories: [],
    search: "",
  },
  setIsNew: (value) =>
    set((state) => ({
      filters: { ...state.filters, isNew: value },
    })),
  toggleFamily: (family) =>
    set((state) => ({
      filters: {
        ...state.filters,
        families: state.filters.families.includes(family)
          ? state.filters.families.filter((f) => f !== family)
          : [...state.filters.families, family],
      },
    })),
  toggleCategory: (category) =>
    set((state) => ({
      filters: {
        ...state.filters,
        categories: state.filters.categories.includes(category)
          ? state.filters.categories.filter((c) => c !== category)
          : [...state.filters.categories, category],
      },
    })),
  setSearch: (value) =>
    set((state) => ({
      filters: { ...state.filters, search: value },
    })),
  resetFilters: () =>
    set({
      filters: {
        isNew: undefined,
        families: [],
        categories: [],
        search: "",
      },
    }),
}));
