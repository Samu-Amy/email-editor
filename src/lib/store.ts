import { create } from "zustand";
import { v4 as uuid } from "uuid";

// ----- BASIC -----

// Enums
export enum ViewerSize {
    PC = "1024px",
    TABLET = "768px",
    MOBILE = "640px",
}

// Types
export type TextType = "h1" | "h2" | "h3" | "p" | "span";
export type Position = "start" | "center" | "end";

// Interfaces
export interface Component {
    id: string,
    children?: Component[],
}


// ----- COMPONENTS -----
export interface TextComponent extends Component{
    text: string,
    type: TextType,
    size: string, // px, rem, em, %, ecc.
    jusify: Position,
    alignment: Position,
}


// ----- EMAIL -----


// ----- STATE and ACTIONS -----
export type State = {
    viewerSize: ViewerSize,

}


export type Actions = {
    changeViewerSize: (size: ViewerSize) => void,
}


// ----- STORE -----
export const useAppStore = create<State & Actions>()((set) => ({
    viewerSize: ViewerSize.PC,
    changeViewerSize: (size: ViewerSize) => set((state) => ({
        ...state,
        viewerSize: size,
    })),
}));