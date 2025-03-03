import { create } from "zustand";
import { loginUser } from "../infrastructure/authApi";
import { AuthState } from "../domain/AuthState";

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,

  login: async (email, password) => {
    try {
      const userData = await loginUser(email, password);
      if (!userData) return null; 

      set({ user: userData, isAuthenticated: true });
      return userData; 
    } catch (error) {
      console.error("Error al iniciar sesión", error);
      return null; 
    }
  },

  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
}));
