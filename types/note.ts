export type Note = {
  id: string;
  title: string;
  content: string;
  tags: Tag[];
  createdAt?: string;
  updatedAt?: string;
};

export type Tag = {
  id: string;
  name: string;
};

export type CreateNote = {
  title: string;
  content: string;
  tags: Tag[];
};

export type UpdateNote = Partial<CreateNote>;

export type NotesContextType = {
  notes: CreateNote[];
  loading: boolean;
  fetchNotes: () => Promise<void>;
  createNote: (data: CreateNote) => Promise<void>;
};
