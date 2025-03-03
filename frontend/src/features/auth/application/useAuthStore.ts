import { create } from "zustand";
import { loginUser } from "../infrastructure/authApi";
import { AuthState } from "../domain/AuthState";

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,

  login: async (email, password) => {
    try {
      const userData = await loginUser(email, password);
      set({ user: userData, isAuthenticated: true });
    } catch (error) {
      console.error("Error al inciar sesión", error);
    }
  },

  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
}));
