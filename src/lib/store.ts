import { create } from "zustand";
import { v4 as uuid } from "uuid";

export enum ViewerSize {
    PC = "1024px",
    TABLET = "768px",
    MOBILE = "640px",
}

// TODO: crea e implementa Email nello stato
// TODO: usa uuid per gli id
export type Email = {
    id: string,
}


export type State = {
    viewerSize: ViewerSize,
}


export type Actions = {
    changeViewerSize: (size: ViewerSize) => void,
}


export const useAppStore = create<State & Actions>()((set) => ({
    viewerSize: ViewerSize.PC,
    changeViewerSize: (size: ViewerSize) => set((state) => ({
        ...state,
        viewerSize: size,
    })),
}));