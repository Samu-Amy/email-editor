"use client"

import { EmailContent } from "@/email/email-base";
import { ResponsiveButtons } from "./responsive-buttons";
import { useAppStore } from "@/lib/store";

// TODO: prova a mettere componente della mail (o solo una parte, togliendo i tag doctype e html) qui per visualizarlo

export const Preview = () => {
    const viewerSize = useAppStore(state => state.viewerSize);

    return (
        <div className="w-full h-full bg-zinc-200 flex flex-col items-center">
            <ResponsiveButtons />
            <div style={{ width: `${viewerSize}` }} className={`h-full flex justify-center items-center`}>
                <div className="bg-zinc-100">
                    <EmailContent />
                </div>
            </div>
        </div>
    );
}