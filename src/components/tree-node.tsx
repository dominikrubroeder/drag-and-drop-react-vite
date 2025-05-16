import {useState} from "react";
import type {FileNode} from "./file-tree.tsx";
import {DocumentIcon, FolderIcon, FolderOpenIcon} from "@heroicons/react/24/outline";

export function TreeNode({node, searchValue}: { node: FileNode, searchValue?: string }) {
    const [expanded, setExpanded] = useState(false);

    const isFolder = node.type === 'folder';

    const toggle = () => {
        if (isFolder) setExpanded(!expanded);
    };

    return (
        <div className={`space-y-2 ${searchValue === undefined ? 'block' : 'hidden'}`}>
            <button onClick={toggle}
                    className="flex w-full items-center gap-2 transition cursor-pointer px-2 py-1 hover:bg-gray-100">
                {isFolder ? (expanded ? <FolderOpenIcon className="size-5"/> :
                    <FolderIcon className="size-5"/>) : <DocumentIcon className="size-5"/>} {node.name}
            </button>

            {isFolder && expanded && node.children && (
                <ul className="pl-7 space-y-2">
                    {node.children.map((child) => (
                        <li key={child.id}>
                            <TreeNode node={child}/>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};