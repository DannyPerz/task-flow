import { Request, Response } from "express";
import { AuthService } from "../application/authService";

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password, fullName, role } = req.body;
    const user = await AuthService.registerUser(email, password, fullName, role);

    if (!user) {
      res.status(400).json({ error: "Error al registrar usuario" });
      return;
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const session = await AuthService.loginUser(email, password);

    if (!session) {
      res.status(400).json({ error: "Credenciales incorrectas" });
      return;
    }

    res.json(session);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const getProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      res.status(401).json({ error: "No token provided" });
      return;
    }

    const user = await AuthService.getUserProfile(token);
    if (!user) {
      res.status(401).json({ error: "Invalid token" });
      return;
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
