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
export type Position = "start" | "center" | "end"; // TODO: ricorda che forse flex non funziona, bisogna usare le tabelle

// Interfaces
export interface Component {
    id: string,
    children?: Component[],
}


// ----- COMPONENTS -----
export interface TextComponent extends Component{
    text: string,
    type: TextType,
    size?: string, // px, rem, em, %, ecc.
    textColor?: string,
    bgColor?: string
    jusify?: Position,
    alignment?: Position, // TODO: stacca justify e alignment e estendi sia Component che quell'interfaccia (?)
}


// ----- STATE and ACTIONS -----
export type State = {
    viewerSize: ViewerSize,
    // email: Component, // TODO: aggiungi testo preview
}

// TODO: fare una lista di componenti (?) o mettere l'id del componente dentro al quale mettere il nuovo componente
export type Actions = {
    changeViewerSize: (size: ViewerSize) => void,
    // addComponent: (text: string, type: TextType, size: string, jusify?: Position, alignment?: Position, children?: Component[]) => void,
}


// ----- STORE -----
export const useAppStore = create<State & Actions>()((set) => ({
    viewerSize: ViewerSize.PC,
    changeViewerSize: (size: ViewerSize) => set((state) => ({
        ...state,
        viewerSize: size,
    })),
    // addComponent: (text: string, type: TextType, size: string, jusify?: Position, alignment?: Position, children?: Component[]) => set((state) => ({
    //     ...state,
    //     email: Component(
    //         id: uuid(),
    //         text,
    //         type,
    //         size,
    //         justify,
    //         alignment,
    //         children,
    //     ),
    // }),
}));