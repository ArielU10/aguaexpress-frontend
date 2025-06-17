import { HomeIcon, ClipboardDocumentListIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

export default function BottomNav() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md border-t flex justify-around items-center py-2">
      <button onClick={() => navigate('/cliente')} className="flex flex-col items-center text-sm">
        <HomeIcon className="h-6 w-6 text-blue-600" />
        Inicio
      </button>

      <button onClick={() => alert('Aquí irá el historial')} className="flex flex-col items-center text-sm">
        <ClipboardDocumentListIcon className="h-6 w-6 text-blue-600" />
        Historial
      </button>

      <button onClick={() => navigate('/cliente/pedido')} className="flex flex-col items-center text-sm">
        <ShoppingBagIcon className="h-6 w-6 text-blue-600" />
        Pedido
      </button>

      <button onClick={() => { logout(); navigate('/login'); }} className="flex flex-col items-center text-sm">
        <ArrowRightOnRectangleIcon className="h-6 w-6 text-red-500" />
        Salir
      </button>

    </div>
  );
}
