import {TreeNode} from "./tree-node.tsx";

export interface FileNode {
    id: string;
    name: string;
    type: 'file' | 'folder';
    children?: FileNode[];
}

export const fileTreeData: FileNode[] = [
    {
        id: '1',
        name: 'public',
        type: 'folder',
        children: [
            {id: '1-1', name: 'vite.svg', type: 'file'},
            {id: '1-2', name: 'index.html', type: 'file'},
        ],
    },
    {
        id: '2',
        name: 'src',
        type: 'folder',
        children: [
            {
                id: '2-1',
                name: 'assets',
                type: 'folder',
                children: [
                    {id: '2-1-1', name: 'logo.svg', type: 'file'},
                ],
            },
            {
                id: '2-2',
                name: 'components',
                type: 'folder',
                children: [
                    {id: '2-2-1', name: 'HelloWorld.tsx', type: 'file'},
                    {id: '2-2-2', name: 'FileTree.tsx', type: 'file'},
                ],
            },
            {id: '2-3', name: 'App.tsx', type: 'file'},
            {id: '2-4', name: 'main.tsx', type: 'file'},
            {id: '2-5', name: 'vite-env.d.ts', type: 'file'},
            {id: '2-6', name: 'index.css', type: 'file'}, // Tailwind entry
        ],
    },
    {id: '3', name: 'tailwind.config.ts', type: 'file'},
    {id: '4', name: 'postcss.config.js', type: 'file'},
    {id: '5', name: 'index.html', type: 'file'},
    {id: '6', name: 'package.json', type: 'file'},
    {id: '7', name: 'tsconfig.json', type: 'file'},
    {id: '8', name: 'vite.config.ts', type: 'file'},
    {id: '9', name: 'README.md', type: 'file'},
];

export function FileTree() {
    return <div className="space-y-4 flex-1 w-[300px] gridg gap-4 px-4">
        <input className="rounded border focus:outline-none px-4 py-3 border-gray-200" type="text"
               placeholder="Search..."/>

        <ul className="space-y-2">
            {fileTreeData.map((node) => <li key={node.id}>
                <TreeNode node={node}/>
            </li>)}
        </ul>
    </div>
}