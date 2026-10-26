import { Megaphone, AlertCircle, Clock } from "lucide-react";
import { useState } from "react";

export default function ComunicadosResidente() {
  const [comunicados] = useState([
    {
      id: 1,
      titulo: "Mantenimiento de Ascensores",
      mensaje:
        "Mañana de 8:00 AM a 12:00 PM la Torre 2 no tendrá servicio por mantenimiento preventivo.",
      fecha: "Hoy, 10:00 AM",
      prioridad: "Alta",
    },
    {
      id: 2,
      titulo: "Asamblea General",
      mensaje:
        "Recordamos que este sábado tendremos asamblea general ordinaria en el salón comunal.",
      fecha: "Ayer, 04:30 PM",
      prioridad: "Normal",
    },
  ]);

  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-10 bg-slate-50 scroll-smooth h-full">
      <div className="mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-800">
          Muro de Comunicados
        </h2>
        <p className="text-slate-500 mt-1">
          Mantente informado con las últimas noticias de la administración.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {comunicados.map((comunicado) => (
          <div
            key={comunicado.id}
            className={`p-6 border rounded-2xl shadow-sm transition-all hover:shadow-md ${comunicado.prioridad === "Alta" ? "bg-white border-rose-200" : "bg-white border-slate-200"}`}
          >
            <div className="flex items-start gap-4 mb-4">
              <div
                className={`w-12 h-12 rounded-full shrink-0 flex items-center justify-center ${comunicado.prioridad === "Alta" ? "bg-rose-100 text-rose-600" : "bg-indigo-100 text-indigo-600"}`}
              >
                {comunicado.prioridad === "Alta" ? (
                  <AlertCircle size={24} />
                ) : (
                  <Megaphone size={24} />
                )}
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-800 leading-tight">
                  {comunicado.titulo}
                </h3>
                {comunicado.prioridad === "Alta" && (
                  <span className="inline-block mt-1 text-[10px] uppercase tracking-wider font-bold bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full">
                    Urgente
                  </span>
                )}
              </div>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              {comunicado.mensaje}
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-400 pt-4 border-t border-slate-100">
              <Clock size={16} /> {comunicado.fecha}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
