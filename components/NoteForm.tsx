"use client";
import { useState } from "react";
import { useNotes } from "@/hooks/useNotes";

export default function NoteForm() {
  const { createNote } = useNotes();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await createNote({ content, title, tags: [] });
    setTitle("");
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="text"
        placeholder="Título da nota"
        className="border p-2 w-full"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Criar nota
      </button>
    </form>
  );
}
