import express from "express";
import authRoutes from "../modules/auth/presentation/authRoutes";

const router = express.Router();

router.use("/auth", authRoutes);

export default router;
