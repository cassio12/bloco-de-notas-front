"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { api } from "@/lib/api";
import { CreateNote, NotesContextType } from "@/types/note";

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export function NotesProvider({ children }: { children: React.ReactNode }) {
  const [notes, setNotes] = useState<CreateNote[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchNotes() {
    setLoading(true);
    try {
      const res = await api.get("/notes");
      setNotes(res.notes);
    } finally {
      setLoading(false);
    }
  }

  async function createNote(data: CreateNote) {
    setLoading(true);
    try {
      const res = await api.post("/notes", data);
      setNotes(res.notes); // API já retorna lista atualizada
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <NotesContext.Provider value={{ notes, loading, fetchNotes, createNote }}>
      {children}
    </NotesContext.Provider>
  );
}

export function useNotesContext() {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error("useNotesContext must be used within a NotesProvider");
  }
  return context;
}
