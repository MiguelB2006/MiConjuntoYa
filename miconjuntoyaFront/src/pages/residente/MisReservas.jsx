import {
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  Info,
  Trash2,
} from "lucide-react";
import { useState } from "react";

export default function MisReservas() {
  const [reservas] = useState([
    {
      id: 1,
      zona: "Salón Social",
      fecha: "15 Nov, 2026",
      horario: "06:00 PM - 11:00 PM",
      estado: "Aprobada",
    },
    {
      id: 2,
      zona: "Zona BBQ",
      fecha: "20 Nov, 2026",
      horario: "12:00 PM - 04:00 PM",
      estado: "Pendiente",
    },
    {
      id: 3,
      zona: "Cancha Sintética",
      fecha: "10 Oct, 2026",
      horario: "08:00 PM - 09:00 PM",
      estado: "Rechazada",
    },
  ]);

  const getEstadoBadge = (estado) => {
    switch (estado) {
      case "Pendiente":
        return "bg-amber-100 text-amber-700 border-amber-200";
      case "Aprobada":
        return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "Rechazada":
        return "bg-rose-100 text-rose-700 border-rose-200";
      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  const getEstadoIcon = (estado) => {
    switch (estado) {
      case "Pendiente":
        return <Clock size={14} />;
      case "Aprobada":
        return <CheckCircle size={14} />;
      case "Rechazada":
        return <XCircle size={14} />;
      default:
        return <Clock size={14} />;
    }
  };

  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-10 bg-slate-50 h-full">
      <div className="mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-800">
          Mis Reservas
        </h2>
        <p className="text-slate-500 mt-1">
          Consulta el estado y el historial de tus reservas de zonas comunes.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Mensaje Informativo (Reemplaza el formulario) */}
        <div className="xl:col-span-1">
          <div className="bg-linear-to-br from-indigo-600 to-indigo-800 p-6 rounded-2xl shadow-md text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Info size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-lg">Información Importante</h3>
            </div>
            <p className="text-indigo-100 leading-relaxed text-sm">
              Para solicitar una nueva reserva de espacios comunes (Salón
              Social, Zona BBQ, Cancha Sintética, etc.), por favor{" "}
              <strong>acércate directamente al puesto de administración</strong>
              .
            </p>
            <div className="mt-5 p-3 bg-white/10 rounded-xl text-sm border border-white/20">
              Actualmente las reservas solo pueden ser generadas y gestionadas
              en el sistema por la administración del conjunto.
            </div>
          </div>
        </div>

        {/* Historial de Reservas */}
        <div className="xl:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h3 className="font-bold text-lg text-slate-800">
              Historial de Reservas
            </h3>
          </div>

          <div className="p-5 space-y-4">
            {reservas.map((reserva) => (
              <div
                key={reserva.id}
                className="p-4 border border-slate-100 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white hover:border-slate-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className="hidden sm:flex w-12 h-12 rounded-full bg-slate-50 border border-slate-100 items-center justify-center text-slate-400">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-bold text-slate-800">
                        {reserva.zona}
                      </h4>
                      <span
                        className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold border ${getEstadoBadge(reserva.estado)}`}
                      >
                        {getEstadoIcon(reserva.estado)} {reserva.estado}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} /> {reserva.fecha}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} /> {reserva.horario}
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
