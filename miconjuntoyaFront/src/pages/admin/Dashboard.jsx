import { Users, MessageSquare, Calendar, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import StatCard from "../../components/shared/StatCard";
import VisitorList from "../../components/admin/VisitorList";
import PQRSList from "../../components/admin/PQRSList";

export default function Dashboard() {
  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth">
      {/* Bienvenida y Botones Rápidos */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-800">
            ¡Hola, admin!
          </h2>
          <p className="text-slate-500 mt-1">
            Este es el resumen de tu conjunto para hoy.
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            to="/visitantes"
            className="flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-white rounded-xl font-semibold shadow-lg transition-all"
          >
            <Plus size={18} /> Nuevo Visitante
          </Link>
          <Link
            to="/pqrs"
            className="flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-indigo-100 text-indigo-700 hover:bg-indigo-50 rounded-xl font-semibold shadow-sm transition-all"
          >
            Revisar PQRS
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <StatCard
          titulo="Visitantes Hoy"
          valor="24"
          icono={<Users size={28} />}
          bgColor="bg-blue-100"
          textColor="text-blue-600"
        />
        <StatCard
          titulo="Quejas (PQRS)"
          valor="5"
          icono={<MessageSquare size={28} />}
          bgColor="bg-rose-100"
          textColor="text-rose-600"
        />
        <StatCard
          titulo="Reservas"
          valor="3"
          icono={<Calendar size={28} />}
          bgColor="bg-amber-100"
          textColor="text-amber-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <VisitorList />
        <PQRSList />
      </div>
    </div>
  );
}
