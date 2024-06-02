"use client"

import { renderHtml, renderText } from "@/lib/email-renderer";
import { Button } from "./ui/button";

export const EditorPanel = () => {
    return (
        <div className="w-96 h-full p-6 bg-zinc-900 text-zinc-100 flex flex-col items-center">
            <div className="w-full pb-2 flex justify-between border-b border-zinc-600">
                <ul className="flex gap-4">
                    <li>
                        <Button variant="dark" size="xs">Save</Button>
                    </li>
                    <li>
                        <Button variant="dark" size="xs">Load</Button>
                    </li>
                </ul>
                <Button variant="dark" size="xs" onClick={() => {
                    const html = renderHtml();
                    const text = renderText();
                    console.log(html);
                    console.log(" ---- ---- ---- ---- ---- ---- ---- ---- ---- ");
                    console.log(text);
                }}>Export</Button>
            </div>
            <div className="pt-2">

            </div>
            Editor panel
        </div>
    );
}