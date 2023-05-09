import { create } from 'zustand';
import {IThemeStore, TTheme} from "@/store/theme/types";

export const useThemeStore = create<IThemeStore>((set) => ({
    theme: 'light',
    setTheme(theme: TTheme) {
        set({ theme });
    }
}))