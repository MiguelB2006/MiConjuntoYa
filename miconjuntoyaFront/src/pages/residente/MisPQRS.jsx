import {
  MessageSquarePlus,
  MessageSquare,
  Clock,
  CheckCircle,
  Search,
  Trash2,
  Send,
} from "lucide-react";
import { useState } from "react";

export default function MisPQRS() {
  const [pqrsList] = useState([
    {
      id: 1,
      tipo: "Queja",
      asunto: "Ruido excesivo en apto 305",
      fecha: "Hoy, 08:30 AM",
      estado: "En revisión",
    },
    {
      id: 2,
      tipo: "Petición",
      asunto: "Copia de recibo de administración",
      fecha: "15 Oct, 2026",
      estado: "Resuelto",
    },
    {
      id: 3,
      tipo: "Sugerencia",
      asunto: "Instalar basureros en parque",
      fecha: "10 Oct, 2026",
      estado: "Pendiente",
    },
  ]);

  const getEstadoBadge = (estado) => {
    switch (estado) {
      case "Pendiente":
        return "bg-amber-100 text-amber-700 border-amber-200";
      case "En revisión":
        return "bg-indigo-100 text-indigo-700 border-indigo-200";
      case "Resuelto":
        return "bg-emerald-100 text-emerald-700 border-emerald-200";
      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  const getEstadoIcon = (estado) => {
    switch (estado) {
      case "Pendiente":
        return <Clock size={14} />;
      case "En revisión":
        return <Search size={14} />;
      case "Resuelto":
        return <CheckCircle size={14} />;
      default:
        return <Clock size={14} />;
    }
  };

  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-10 bg-slate-50 h-full">
      <div className="mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-800">
          Mis PQRS
        </h2>
        <p className="text-slate-500 mt-1">
          Radica peticiones, quejas, reclamos o sugerencias a la administración.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Formulario de Nueva PQRS */}
        <div className="xl:col-span-1">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-800 mb-5 flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <MessageSquarePlus size={20} />
              </div>
              Radicar Solicitud
            </h3>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">
                  Tipo de Solicitud
                </label>
                <select className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm text-slate-700">
                  <option>Petición</option>
                  <option>Queja</option>
                  <option>Reclamo</option>
                  <option>Sugerencia</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">
                  Asunto
                </label>
                <input
                  type="text"
                  placeholder="Resumen de su solicitud"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">
                  Descripción Detallada
                </label>
                <textarea
                  rows="4"
                  placeholder="Explique detalladamente su caso..."
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm resize-none"
                ></textarea>
              </div>

              <button className="w-full mt-4 flex justify-center items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-md">
                <Send size={18} /> Enviar PQRS
              </button>
            </form>
          </div>
        </div>

        {/* Historial de PQRS */}
        <div className="xl:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h3 className="font-bold text-lg text-slate-800">
              Seguimiento de Solicitudes
            </h3>
          </div>

          <div className="p-5 space-y-4">
            {pqrsList.map((pqrs) => (
              <div
                key={pqrs.id}
                className="p-4 border border-slate-100 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white hover:border-slate-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className="hidden sm:flex w-12 h-12 rounded-full bg-slate-50 border border-slate-100 items-center justify-center text-slate-400">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-bold text-slate-800">
                        {pqrs.asunto}
                      </h4>
                      <span
                        className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold border ${getEstadoBadge(pqrs.estado)}`}
                      >
                        {getEstadoIcon(pqrs.estado)} {pqrs.estado}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-slate-500 font-medium">
                      <span className="font-bold text-slate-700">
                        {pqrs.tipo}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} /> {pqrs.fecha}
                      </span>
                    </div>
                  </div>
                </div>

                <button className="text-slate-400 hover:text-rose-500 transition-colors self-start sm:self-center p-2 hover:bg-rose-50 rounded-lg">
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
