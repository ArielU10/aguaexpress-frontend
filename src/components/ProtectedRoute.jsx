import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children, requiredRole }) {
  const { user, token } = useAuth();

  // Si no hay usuario o token → redirigir al login
  if (!user || !token) {
    return <Navigate to="/login" />;
  }

  // Si se requiere un rol específico y no lo tiene → redirigir
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/login" />;
  }

  // Si todo bien, renderiza el componente hijo
  return children;
}
