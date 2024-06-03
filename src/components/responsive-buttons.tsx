"use client"

import { Laptop, Smartphone, Tablet } from "lucide-react";
import { Button } from "./ui/button";
import { useAppStore, ViewerSize } from "@/lib/store";

// TODO: implementa con lo stato

export const ResponsiveButtons = () => {
    const { viewerSize, changeViewerSize } = useAppStore(state => state);

    const selectedClass = "bg-zinc-900 text-zinc-200 hover:bg-zinc-900/80 hover:text-100"

    return (
        <div className="w-fit m-4 bg-zinc-100 rounded-md shadow-md">
            <Button variant="light" className={viewerSize === ViewerSize.PC ? selectedClass : ""} onClick={() => changeViewerSize(ViewerSize.PC)}><Laptop /></Button>
            <Button variant="light" className={viewerSize === ViewerSize.TABLET ? selectedClass : ""} onClick={() => changeViewerSize(ViewerSize.TABLET)}><Tablet className="rotate-90"/></Button>
            <Button variant="light" className={viewerSize === ViewerSize.MOBILE ? selectedClass : ""} onClick={() => changeViewerSize(ViewerSize.MOBILE)}><Smartphone /></Button>
        </div>
    );
}