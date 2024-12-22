import { useState } from "react";
import { Toolbar } from "./Toolbar";

export function NotionEditor() {
  const [title, setTitle] = useState("Untitled");
  const [content, setContent] = useState("");

  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full text-4xl font-bold mb-4 bg-transparent border-none outline-none text-[#37352F] placeholder-gray-300"
        placeholder="Untitled"
      />
      <div className="mb-4">
        <Toolbar />
      </div>
      <div
        className="prose prose-lg max-w-none"
        contentEditable
        onInput={(e) => setContent(e.currentTarget.textContent || "")}
        className="min-h-[200px] outline-none text-[#37352F] text-lg"
        placeholder="Type '/' for commands"
      />
    </div>
  );
}