import { Home, Users, Calendar, MessageSquare, Megaphone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function SidebarResidente({ menuAbierto }) {
  const location = useLocation();

  const getEstiloEnlace = (ruta) => {
    return location.pathname === ruta
      ? "flex items-center gap-3 px-4 py-3 bg-indigo-800/80 rounded-xl font-medium border-l-4 border-emerald-400 shadow-md text-white"
      : "flex items-center gap-3 px-4 py-3 hover:bg-indigo-800 rounded-xl transition-colors text-indigo-200 hover:text-white";
  };

  return (
    <aside
      className={`bg-slate-900 text-white flex-col transition-all duration-300 ${
        menuAbierto ? "flex w-64" : "hidden"
      }`}
    >
      <div className="h-20 flex items-center justify-center border-b border-slate-800">
        <h1 className="text-3xl font-extrabold tracking-tight">
          MiConjunto<span className="text-emerald-400">Ya</span>
        </h1>
      </div>

      <nav className="flex-1 px-4 py-8 space-y-3 overflow-y-auto">
        <Link to="/residente" className={getEstiloEnlace("/residente")}>
          <Home size={20} /> Mi Apartamento
        </Link>
        <Link
          to="/residente/visitas"
          className={getEstiloEnlace("/residente/visitas")}
        >
          <Users size={20} /> Mis Visitas
        </Link>
        <Link
          to="/residente/reservas"
          className={getEstiloEnlace("/residente/reservas")}
        >
          <Calendar size={20} /> Mis Reservas
        </Link>
        <Link
          to="/residente/pqrs"
          className={getEstiloEnlace("/residente/pqrs")}
        >
          <MessageSquare size={20} /> Mis PQRS
        </Link>
        <Link
          to="/residente/comunicados"
          className={getEstiloEnlace("/residente/comunicados")}
        >
          <Megaphone size={20} /> Comunicados
        </Link>
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold shadow-lg">
            G
          </div>
          <div>
            <p className="text-sm font-bold">Familia Gómez</p>
            <p className="text-xs text-slate-400">Apto 304 - Torre 2</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
