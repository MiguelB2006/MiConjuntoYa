import {
  X,
  User,
  Calendar,
  MessageSquare,
  CheckCircle,
  Clock,
} from "lucide-react";
import { useState } from "react";

export default function ModalAtenderPQRS({
  pqrs,
  onClose,
  onActualizarEstado,
}) {
  const [respuestaAdmin, setRespuestaAdmin] = useState("");

  if (!pqrs) return null;

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-all">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header del Modal */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-slate-50">
          <div>
            <h3 className="font-bold text-xl text-slate-800 flex items-center gap-2">
              Detalle de {pqrs.tipo}
            </h3>
            <p className="text-sm text-slate-500 font-medium mt-1">
              Radicado: {pqrs.id}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-colors shrink-0"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cuerpo del Modal con scroll */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Info del Residente */}
          <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 shrink-0">
                <User size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                  Residente
                </p>
                <p className="font-bold text-slate-800">{pqrs.residente}</p>
                <p className="text-sm text-slate-600">
                  Torre {pqrs.torre} - Apto {pqrs.apto}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 shrink-0">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                  Fecha de Radicación
                </p>
                <p className="font-bold text-slate-800">{pqrs.fecha}</p>
                <span
                  className={`mt-1 px-2.5 py-0.5 rounded-full text-xs font-bold border inline-block ${getEstadoBadge(pqrs.estado)}`}
                >
                  {pqrs.estado}
                </span>
              </div>
            </div>
          </div>

          {/* Detalle del Mensaje */}
          <div>
            <h4 className="text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
              <MessageSquare size={16} className="text-blue-500" /> Asunto:{" "}
              {pqrs.asunto}
            </h4>
            <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 text-slate-700 text-sm leading-relaxed">
              {pqrs.descripcion}
            </div>
          </div>

          {/* Zona de Respuesta del Administrador */}
          <div className="border-t border-slate-100 pt-6">
            <label className="block text-sm font-bold text-slate-700 mb-2">
              Gestión y Respuesta (Opcional)
            </label>
            <textarea
              rows="3"
              placeholder="Escribe aquí las acciones tomadas o la respuesta al residente..."
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm resize-none"
              value={respuestaAdmin}
              onChange={(e) => setRespuestaAdmin(e.target.value)}
            ></textarea>
          </div>
        </div>

        {/* Footer de Acciones Dinámicas */}
        <div className="p-5 border-t border-slate-100 flex flex-col sm:flex-row justify-between gap-3 bg-slate-50">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-slate-600 font-bold hover:bg-slate-200 rounded-xl transition-colors order-2 sm:order-1"
          >
            Cerrar
          </button>

          <div className="flex flex-col sm:flex-row gap-3 order-1 sm:order-2">
            {pqrs.estado === "Pendiente" && (
              <button
                onClick={() => {
                  onActualizarEstado(pqrs.id, "En revisión");
                  setRespuestaAdmin("");
                }}
                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-bold rounded-xl transition-colors"
              >
                <Clock size={18} /> Marcar en Revisión
              </button>
            )}

            {pqrs.estado !== "Resuelto" && (
              <button
                onClick={() => {
                  onActualizarEstado(pqrs.id, "Resuelto");
                  setRespuestaAdmin("");
                }}
                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-all shadow-sm"
              >
                <CheckCircle size={18} /> Resolver Caso
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
