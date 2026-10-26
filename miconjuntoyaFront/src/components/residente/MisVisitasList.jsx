import { CheckCircle2, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function MisVisitasList({ visitas = [] }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
        <h3 className="font-bold text-lg text-slate-800">
          Mis Últimas Visitas
        </h3>
        <Link
          to="/residente/visitas"
          className="text-sm text-indigo-600 font-semibold hover:underline"
        >
          Gestionar
        </Link>
      </div>
      <div className="p-5 space-y-4">
        {visitas.length > 0 ? (
          visitas.map((visita) => (
            <div
              key={visita.id}
              className="flex justify-between items-center p-3 hover:bg-slate-50 rounded-xl transition-colors border border-transparent hover:border-slate-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
                  {visita.nombre.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-700">{visita.nombre}</p>
                  <p className="text-xs text-slate-500 font-medium">
                    {visita.tipo}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-slate-700">
                  {visita.hora}
                </p>
                <div
                  className={`flex items-center justify-center gap-1 mt-1 text-xs px-2 py-1 rounded-md font-bold ${visita.estado === "En conjunto" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}`}
                >
                  {visita.estado === "En conjunto" ? (
                    <CheckCircle2 size={12} />
                  ) : (
                    <Clock size={12} />
                  )}
                  {visita.estado}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-slate-500 text-center py-4">
            No tienes visitas recientes.
          </p>
        )}
      </div>
    </div>
  );
}
