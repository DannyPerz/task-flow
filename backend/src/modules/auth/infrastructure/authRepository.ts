import { createClient } from "@supabase/supabase-js";
import { User } from "../domain/User";
import dotenv from "dotenv";

dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);

export const AuthRepository = {
  async register(
    email: string,
    password: string,
    fullName: string,
    role: string
  ): Promise<User | null> {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { fullName, role } },
      });

      if (error) {
        console.error("Error en register:", error.message);
        return null;
      }

      if (!data.user) {
        console.error("Error en register: Usuario no creado.");
        return null;
      }

      return { id: data.user.id, email, fullName, role } as User;
    } catch (error) {
      console.error("Excepción en register:", error);
      return null;
    }
  },

  async login(email: string, password: string) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("Error en login:", error.message);
        return null;
      }

      if (!data.session || !data.user) {
        console.error("Error en login: Sesión o usuario inválido.");
        return null;
      }

      return {
        user: {
          id: data.user.id,
          email: data.user.email,
          fullName: data.user.user_metadata.fullName,
          role: data.user.user_metadata.role || "user",
        },
        token: data.session.access_token,
      };
    } catch (error) {
      console.error("Excepción en login:", error);
      return null;
    }
  },

  async getUser(token: string) {
    try {
      const { data, error } = await supabase.auth.getUser(token);

      if (error) {
        console.error("Error en getUser:", error.message);
        return null;
      }

      if (!data.user) {
        console.error("Error en getUser: Usuario no encontrado.");
        return null;
      }

      return {
        id: data.user.id,
        email: data.user.email,
        fullName: data.user.user_metadata.fullName,
        role: data.user.user_metadata.role || "user",
      };
    } catch (error) {
      console.error("Excepción en getUser:", error);
      return null;
    }
  },
};
