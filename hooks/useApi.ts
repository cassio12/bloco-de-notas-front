import { CreateNote } from "@/types/note";

export function useApi() {
  async function get() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/notes");
    return res.json();
  }

  async function post(data: CreateNote) {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.json();
  }

  return { get, post };
}
