import { useNotesContext } from "@/context/NotesContext";

export function useNotes() {
  const { notes, loading, fetchNotes, createNote } = useNotesContext();

  return {
    notes,
    loading,
    reload: fetchNotes,
    createNote,
  };
}
