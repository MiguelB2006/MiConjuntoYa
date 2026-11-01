import {
  X,
  Calendar as CalendarIcon,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function ModalGestionZona({
  zona,
  reservas,
  onClose,
  onActualizarEstado,
}) {
  if (!zona) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-all">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-6 border-b border-slate-100 relative bg-slate-50">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-colors"
          >
            <X size={24} />
          </button>
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-2xl ${zona.colorFondo}`}>
              {zona.icono}
            </div>
            <div>
              <h3 className="font-bold text-xl text-slate-800 leading-tight">
                Gestión: {zona.nombre}
              </h3>
              <p className="text-sm text-slate-500 font-medium mt-1">
                Aforo: {zona.aforo} | Horario: {zona.horario}
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 overflow-y-auto flex-1 bg-slate-100/50">
          <h4 className="font-bold text-slate-700 mb-4">
            Próximas Reservas Solicitadas
          </h4>

          {reservas.length > 0 ? (
            <div className="space-y-4">
              {reservas.map((reserva) => (
                <div
                  key={reserva.id}
                  className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div>
                    <p className="font-bold text-slate-800">
                      {reserva.residente}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-slate-500 font-medium">
                      <span className="flex items-center gap-1.5">
                        <CalendarIcon size={14} /> {reserva.fecha}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} /> {reserva.horario}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {reserva.estado === "Pendiente" ? (
                      <>
                        <button
                          onClick={() =>
                            onActualizarEstado(reserva.id, "Aprobada")
                          }
                          className="px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-600 font-bold text-sm rounded-lg transition-colors border border-emerald-200 flex items-center gap-1"
                        >
                          <CheckCircle size={16} /> Aprobar
                        </button>
                        <button
                          onClick={() =>
                            onActualizarEstado(reserva.id, "Rechazada")
                          }
                          className="px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold text-sm rounded-lg transition-colors border border-rose-200 flex items-center gap-1"
                        >
                          <XCircle size={16} /> Rechazar
                        </button>
                      </>
                    ) : (
                      <span
                        className={`px-3 py-1.5 rounded-lg text-sm font-bold border ${reserva.estado === "Aprobada" ? "bg-emerald-100 text-emerald-700 border-emerald-200" : "bg-rose-100 text-rose-700 border-rose-200"}`}
                      >
                        {reserva.estado}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-white rounded-xl border border-slate-200 border-dashed">
              <CalendarIcon size={40} className="text-slate-300 mx-auto mb-3" />
              <p className="font-medium text-slate-500">
                No hay reservas para esta zona.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
