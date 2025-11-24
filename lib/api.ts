import { useApi } from "@/hooks/useApi";
import { CreateNote } from "@/types/note";

const apiBase = process.env.NEXT_PUBLIC_API_URL;

export const api = {
  async get(path: string) {
    const res = await fetch(apiBase + path);
    return res.json();
  },
  async post(path: string, data: CreateNote) {
    const res = await fetch(apiBase + path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.json();
  },
};
