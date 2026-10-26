import {
  UserPlus,
  Clock,
  CheckCircle,
  LogOut,
  ShieldCheck,
  Trash2,
} from "lucide-react";
import { useState } from "react";

export default function MisVisitas() {
  const [visitas] = useState([
    {
      id: 1,
      nombre: "Carlos Gómez",
      tipo: "Familiar / Amigo",
      fecha: "Hoy, 02:00 PM",
      estado: "Esperando",
    },
    {
      id: 2,
      nombre: "Técnico de Claro",
      tipo: "Servicio Técnico",
      fecha: "Hoy, 10:00 AM",
      estado: "En conjunto",
    },
    {
      id: 3,
      nombre: "Repartidor de Amazon",
      tipo: "Domicilio",
      fecha: "Ayer, 04:30 PM",
      estado: "Salió",
    },
  ]);

  const getEstadoBadge = (estado) => {
    switch (estado) {
      case "Esperando":
        return "bg-amber-100 text-amber-700 border-amber-200";
      case "En conjunto":
        return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "Salió":
        return "bg-slate-100 text-slate-600 border-slate-200";
      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  const getEstadoIcon = (estado) => {
    switch (estado) {
      case "Esperando":
        return <Clock size={14} />;
      case "En conjunto":
        return <CheckCircle size={14} />;
      case "Salió":
        return <LogOut size={14} />;
      default:
        return <Clock size={14} />;
    }
  };

  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-10 bg-slate-50 h-full">
      <div className="mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-800">
          Mis Visitas
        </h2>
        <p className="text-slate-500 mt-1">
          Autoriza con anticipación el ingreso de personas a tu apartamento.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Formulario de Nueva Autorización */}
        <div className="xl:col-span-1">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-800 mb-5 flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                <UserPlus size={20} />
              </div>
              Nueva Autorización
            </h3>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  placeholder="Ej. Juan Pérez"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">
                  Tipo de Visita
                </label>
                <select className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm text-slate-700">
                  <option>Familiar / Amigo</option>
                  <option>Domicilio / Paquete</option>
                  <option>Servicio Técnico (Ej. Internet)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">
                  Fecha y Hora Estimada
                </label>
                <input
                  type="datetime-local"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm text-slate-700"
                />
              </div>

              <button className="w-full mt-4 flex justify-center items-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-md">
                <ShieldCheck size={18} /> Autorizar Ingreso
              </button>
            </form>
          </div>
        </div>

        {/* Historial de Autorizaciones */}
        <div className="xl:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h3 className="font-bold text-lg text-slate-800">
              Historial y Estado
            </h3>
          </div>

          <div className="p-5 space-y-4">
            {visitas.map((visita) => (
              <div
                key={visita.id}
                className="p-4 border border-slate-100 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white hover:border-slate-300 hover:shadow-sm transition-all"
              >
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="font-bold text-slate-800">
                      {visita.nombre}
                    </h4>
                    <span
                      className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold border ${getEstadoBadge(visita.estado)}`}
                    >
                      {getEstadoIcon(visita.estado)} {visita.estado}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 font-medium">
                    {visita.tipo}
                  </p>
                  <div className="flex items-center gap-1.5 mt-2 text-xs text-slate-400 font-semibold">
                    <Clock size={14} />{" "}
                    {visita.estado === "Esperando"
                      ? "Llegada estimada:"
                      : "Registro:"}{" "}
                    {visita.fecha}
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
