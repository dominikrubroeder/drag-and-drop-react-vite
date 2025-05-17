import {FileTree} from "./components/file-tree.tsx";

export default function App() {
    return (
        <div className="h-screen sticky top-0 p-4 flex flex-col gap-4">
            <header>File tree</header>

            <FileTree/>

            <footer className="flex bg-white sticky bottom-0 p-4 gap-8 text-gray-400 text-sm">
                <span>React</span>
                <span>TypeScript</span>
                <span>Vite</span>
                <span>Tailwind</span>
            </footer>
        </div>
    )
}