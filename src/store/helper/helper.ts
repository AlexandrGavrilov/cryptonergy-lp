import {create} from "zustand";
import {IHelperStore} from "@/store/helper/types";

export const useHelperStore = create<IHelperStore>((set) => ({
    isMobile: false,
    detected: false,
    setIsMobile(isMobile: boolean) {
        set({ isMobile, detected: true })
    }
}))