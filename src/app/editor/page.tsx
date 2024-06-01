import { EditorPanel } from "@/components/editor-panel";
import { Preview } from "@/components/preview";

const EditorPage = () => {
    return (
        <main className="h-screen flex justify-between">
            <Preview />
            <EditorPanel />
        </main>
    );
}

export default EditorPage;
