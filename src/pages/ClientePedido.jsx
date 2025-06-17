import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function ClientePedido() {
  const { user, token } = useAuth();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [type, setType] = useState('inmediato'); // o 'programado'
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg('');

    try {
      await axios.post(
        'http://localhost:3000/api/orders',
        {
          quantity,
          type,
          id_user: user.id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMsg('✅ Pedido realizado correctamente');
      setTimeout(() => navigate('/cliente/historial'), 2000);
    } catch (err) {
      console.error(err);
      setMsg('❌ Error al realizar el pedido');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-6 pb-24 px-4">
      <div className="max-w-sm mx-auto bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold text-center mb-4">Realizar Pedido</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Cantidad de botellones</label>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full border rounded px-3 py-2 text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Tipo de pedido</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full border rounded px-3 py-2 text-sm"
            >
              <option value="inmediato">Inmediato</option>
              <option value="programado">Programado</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? 'Enviando...' : 'Confirmar Pedido'}
          </button>

          {msg && <p className="text-center text-sm mt-2">{msg}</p>}
        </form>
      </div>

      <BottomNav />
    </div>
  );
}
