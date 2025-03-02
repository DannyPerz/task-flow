import { AuthRepository } from "../infrastructure/authRepository";

export const AuthService = {
  async registerUser(
    email: string,
    password: string,
    fullName: string,
    role: string
  ) {
    return await AuthRepository.register(email, password, fullName, role);
  },

  async loginUser(email: string, password: string) {
    return await AuthRepository.login(email, password);
  },

  async getUserProfile(token: string) {
    return await AuthRepository.getUser(token);
  },
};
