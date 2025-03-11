import { create } from "zustand"

interface AppState {
  user: {
    name: string
    email: string
    isLoggedIn: boolean
  }
  setUser: (user: AppState["user"]) => void
  logout: () => void
}

export const useStore = create<AppState>((set) => ({
  user: {
    name: "",
    email: "",
    isLoggedIn: false,
  },
  setUser: (user) => set({ user }),
  logout: () => set({ user: { name: "", email: "", isLoggedIn: false } }),
}))

