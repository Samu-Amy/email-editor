"use client"

import { Laptop, Smartphone, Tablet } from "lucide-react";
import { Button } from "./ui/button";
import { useAppStore, ViewerSize } from "@/lib/store";

// TODO: implementa con lo stato

export const ResponsiveButtons = () => {
    const { viewerSize, changeViewerSize } = useAppStore(state => state);

    return (
        <div className="w-fit m-4 bg-zinc-800 rounded-md">
            <Button variant="lighter" className={viewerSize === ViewerSize.PC ? "bg-zinc-900" : ""} onClick={() => changeViewerSize(ViewerSize.PC)}><Laptop /></Button>
            <Button variant="lighter" className={viewerSize === ViewerSize.TABLET ? "bg-zinc-900" : ""} onClick={() => changeViewerSize(ViewerSize.TABLET)}><Tablet className="rotate-90"/></Button>
            <Button variant="lighter" className={viewerSize === ViewerSize.MOBILE ? "bg-zinc-900" : ""} onClick={() => changeViewerSize(ViewerSize.MOBILE)}><Smartphone /></Button>
        </div>
    );
}