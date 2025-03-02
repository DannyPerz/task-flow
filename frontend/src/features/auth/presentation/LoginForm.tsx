"use client";

//Hooks
import { useState } from "react";
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

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Inicio de sesión</CardTitle>
        <CardDescription>
          Inicie sesión en su cuenta para comenzar a usar Task Flow
        </CardDescription>
      </CardHeader>
      <form action="">
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input type="email" id="email" placeholder="Correo electrónico" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Contraseña</Label>
              <Button variant="link" className="p-0 h-auto text-sm">
                ¿Olvidaste tu contraseña?
              </Button>
            </div>
            <div className="relative">
              <Input type={showPassword ? "text" : "password"} id="password" placeholder="Contraseña" autoComplete="current-password" />
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
        <Button variant="secondary" className="w-full">
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
