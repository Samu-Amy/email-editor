"use client"

import { ResponsiveButtons } from "./responsive-buttons";
import { useAppStore } from "@/lib/store";
import { TextComp } from "./email/editable-components";

// TODO: prova a mettere componente della mail (o solo una parte, togliendo i tag doctype e html) qui per visualizarlo

export const Preview = () => {
    const viewerSize = useAppStore(state => state.viewerSize);

    return (
        <div className="w-full h-full pb-4 bg-zinc-200 flex flex-col items-center">
            <ResponsiveButtons />
            <div style={{ width: `${viewerSize}` }} className={`h-full flex justify-center items-center bg-zinc-100`}>
                <TextComp id="dasd2d" text="Titolo" type="h1" size="18px"/>
            </div>
        </div>
    );
}