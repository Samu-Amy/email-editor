import { TextComponent } from "@/lib/store";
import { createElement } from "react";

export const TextComp = ({text, type, size, jusify, alignment, children}: TextComponent) => {
    return createElement(type, {style: {width: "100%", height: "100%", fontSize: size, textAlign: alignment}}, text);
}