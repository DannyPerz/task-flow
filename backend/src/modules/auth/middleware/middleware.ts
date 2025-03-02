import { Request, Response, NextFunction } from "express";
import { AuthService } from "../application/authService";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ error: "Acceso denegado" });

  const user = await AuthService.getUserProfile(token);
  if (!user) return res.status(401).json({ error: "Token inválido" });

  (req as any).user = user;
  next();
};
