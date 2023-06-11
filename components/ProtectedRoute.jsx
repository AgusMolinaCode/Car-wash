import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ProtectedRoute({ children }) {
  const router = useRouter();

  useEffect(() => {
    // Verificar si la contraseña se ingresó anteriormente y es válida
    const isPasswordEntered = localStorage.getItem('isPasswordEntered');
    if (!isPasswordEntered) {
      router.replace('/admin');
    }

    // Limpiar los datos y la contraseña al salir de la página de administración
    return () => {
      localStorage.removeItem('isPasswordEntered');
    };
  }, [router]);

  return children;
}
