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
                <Button variant="dark" size="xs">Export</Button>
            </div>
            <div className="pt-2">

            </div>
            Editor panel
        </div>
    );
}