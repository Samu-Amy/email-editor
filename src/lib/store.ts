import { create } from "zustand";

export type ViewerSize = "PC" | "TABLET" | "MOBILE";

// TODO: crea e implementa Email nello stato
export type Email = {
    id: string,
}


export type State = {
    viewerSize: ViewerSize,
}


export type Actions = {
    changeViewerSize: (size: ViewerSize) => void,
}


export const useAppState = create<State & Actions>()((set) => ({}));