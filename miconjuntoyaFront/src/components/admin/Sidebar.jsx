import {
  Home,
  Users,
  MessageSquare,
  Calendar,
  Megaphone,
  Package,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ menuAbierto }) {
  const location = useLocation();

  const getEstiloEnlace = (ruta) => {
    return location.pathname === ruta
      ? "flex items-center gap-3 px-4 py-3 bg-indigo-800/80 rounded-xl font-medium border-l-4 border-emerald-400 shadow-md text-white"
      : "flex items-center gap-3 px-4 py-3 hover:bg-indigo-800 rounded-xl transition-colors text-indigo-200 hover:text-white";
  };

  return (
    <aside
      className={`bg-indigo-900 text-white flex-col transition-all duration-300 ${
        menuAbierto ? "flex w-64" : "hidden"
      }`}
    >
      <div className="h-20 flex items-center justify-center border-b border-indigo-800">
        <h1 className="text-3xl font-extrabold tracking-tight">
          MiConjunto<span className="text-emerald-400">Ya</span>
        </h1>
      </div>
      <nav className="flex-1 px-4 py-8 space-y-3 overflow-y-auto">
        <Link to="/" className={getEstiloEnlace("/")}>
          <Home size={20} /> Panel Principal
        </Link>
        <Link to="/visitantes" className={getEstiloEnlace("/visitantes")}>
          <Users size={20} /> Visitantes
        </Link>
        <Link to="/pqrs" className={getEstiloEnlace("/pqrs")}>
          <MessageSquare size={20} /> PQRS / Quejas
        </Link>
        <Link to="/zonas" className={getEstiloEnlace("/zonas")}>
          <Calendar size={20} /> Zonas Comunes
        </Link>
        <Link to="/comunicados" className={getEstiloEnlace("/comunicados")}>
          <Megaphone size={20} /> Comunicados
        </Link>
        <Link to="/alertas" className={getEstiloEnlace("/alertas")}>
          <Package size={20} /> Alertas y Paquetes
        </Link>
      </nav>
      <div className="p-4 border-t border-indigo-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold shadow-lg">
            A
          </div>
          <div>
            <p className="text-sm font-bold">Administrador</p>
            <p className="text-xs text-indigo-300">En línea</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
