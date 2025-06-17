import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdminHome from './pages/AdminHome';
import ClienteHome from './pages/ClienteHome';
import ProtectedRoute from './components/ProtectedRoute';
import ClientePedido from './pages/ClientePedido';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Protegemos la ruta del admin */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminHome />
            </ProtectedRoute>
          }
        />

        {/* Protegemos la ruta del cliente */}
        <Route
          path="/cliente"
          element={
            <ProtectedRoute requiredRole="client">
              <ClienteHome />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cliente/pedido"
          element={
            <ProtectedRoute requiredRole="client">
              <ClientePedido />
            </ProtectedRoute>
          }
        />
        
      </Routes>
    </Router>
  );
}
