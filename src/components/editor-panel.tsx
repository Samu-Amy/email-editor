"use client"

// import { renderHtml, renderText } from "@/lib/email-renderer";
import { saveAs } from 'file-saver';
import { Button } from "./ui/button";
import { renderEmail } from "./email/renderer";

export const EditorPanel = () => {
    const downloadHtmlFile = () => {
        const blob = new Blob([renderEmail("Questa è una mail di prova")], { type: 'text/html;charset=utf-8' });
        saveAs(blob, 'email.html');
    }
    
    return (
        <div className="w-96 h-full p-6 bg-zinc-900 text-zinc-100 flex flex-col items-center">
            <div className="w-full pb-2 flex justify-between border-b border-zinc-600">
                <ul className="flex gap-2">
                    <li>
                        <Button variant="dark" size="xs">Save</Button>
                    </li>
                    <li>
                        <Button variant="dark" size="xs">Load</Button>
                    </li>
                </ul>
                <Button variant="dark" size="xs" onClick={() => {
                    downloadHtmlFile();
                }}>Export</Button>
            </div>
            <div className="pt-2">

            </div>
            Editor panel
        </div>
    );
}