"use client";

//Hooks
import { useState } from "react";
import { useAuthStore } from "@/features/auth/application/useAuthStore";
//UI
import { Button } from "@/app/shared/ui/button";
import { Input } from "@/app/shared/ui/input";
import { Label } from "@/app/shared/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/shared/ui/card";
//Icons
import { EyeClosed, Eye } from "lucide-react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  //Hooks
  const { login } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Inicio de sesión</CardTitle>
        <CardDescription>
          Inicie sesión en su cuenta para comenzar a usar Task Flow
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Correo electrónico"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Contraseña</Label>
              <Button variant="link" className="p-0 h-auto text-sm">
                ¿Olvidaste tu contraseña?
              </Button>
            </div>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                autoComplete="current-password"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeClosed className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Eye className="h-4 w-4 text-muted-foreground" />
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </form>
      <CardFooter>
        <Button type="submit" variant="secondary" className="w-full">
          Iniciar sesión
        </Button>
      </CardFooter>
      <div className="px-8 pb-6 text-center text-sm">
        ¿No tienes una cuenta?{" "}
        <Button variant="link" className="p-0 h-auto">
          Registrarse
        </Button>
      </div>
    </Card>
  );
}

export default LoginForm;
