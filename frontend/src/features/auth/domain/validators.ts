export const validateLogin = (email: string, password: string) => {
  const errors: { email?: string; password?: string } = {};

  if (!email.trim()) {
    errors.email = "El correo es obligatorio.";
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    errors.email = "El correo no es válido.";
  }

  if (!password.trim()) {
    errors.password = "La contraseña es obligartoria."; 
  } else if (password.length < 8) {
    errors.password = "La contraseña debe tener al menos 8 caracteres.";
  }

  return errors;
};
