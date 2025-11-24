"use client";

import { useNotes } from "@/hooks/useNotes";
import NoteForm from "@/components/NoteForm";
import { Note } from "@/types/note";

export default function NotesPage() {
  const { notes, loading } = useNotes();

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Minhas Notas</h1>

      <NoteForm />

      {loading && <p>Carregando...</p>}

      <ul className="space-y-2">
        {notes.map((item, index) => {
          const note = item as Note;
          return (
            <li key={note.id ?? index} className="border p-3 rounded">
              <strong>{note.title}</strong>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
