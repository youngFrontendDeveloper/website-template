import create from "zustand";
import {persist, devtools} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";

import {IMenuStore} from "../types/types";

export const useMenuStore = create<IMenuStore>()(immer((set) => ({
    isMenuOpen: false,
    changeMenuOpen: () => set((state) => ({isMenuOpen: !state.isMenuOpen}))
})))