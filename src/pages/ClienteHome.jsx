import { useAuth } from '../context/AuthContext';
import BottomNav from '../components/BottomNav';

export default function ClienteHome() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-blue-50 pt-6 pb-24 px-4">
      <div className="bg-white p-6 rounded-xl shadow-md max-w-sm mx-auto text-center">
        <h1 className="text-xl font-bold text-blue-700 mb-2">
          ¡Hola {user?.fullName}!
        </h1>
        <p className="text-gray-600 text-sm mb-4">
          Bienvenido a AguaExpress. Puedes realizar tus pedidos desde el menú inferior.
        </p>

        <div className="text-xs text-gray-400">
          Sesión activa como <span className="font-medium">{user?.email}</span>
        </div>
        <button
        onClick={() => navigate('/cliente/pedido')}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg mt-6 shadow-md hover:bg-blue-700 transition"
        >
        Realizar Pedido
        </button>
        <p className="text-sm text-center text-gray-500 mt-4">
        Recuerda: puedes consultar tu <span className="font-medium text-blue-600">historial</span> en el menú inferior.
        </p>


      </div>

      <BottomNav />
    </div>
  );
}
