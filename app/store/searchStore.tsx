import { create } from "zustand";

type State = {
  search: string;
  setSearch: (search: string) => void;
};

export const useStoreSearch = create<State>((set) => ({
  search: "",
  setSearch: (search) => set(() => ({ search })),
}));
