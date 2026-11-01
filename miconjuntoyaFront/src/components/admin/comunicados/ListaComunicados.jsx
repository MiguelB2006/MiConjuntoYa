import { Megaphone, Clock, Trash2, AlertCircle, Info } from "lucide-react";

export default function ListaComunicados({ comunicados, onEliminar }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
        <h3 className="font-bold text-lg text-slate-800">
          Historial de Publicaciones
        </h3>
        <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">
          {comunicados.length} Publicados
        </span>
      </div>

      <div className="p-5 space-y-4">
        {comunicados.length > 0 ? (
          comunicados.map((comunicado) => (
            <div
              key={comunicado.id}
              className={`p-5 border rounded-xl flex flex-col sm:flex-row gap-4 transition-all hover:shadow-sm bg-white relative group
                ${comunicado.prioridad === "Alta" ? "border-rose-200" : "border-slate-200"}`}
            >
              <div
                className={`w-12 h-12 rounded-full shrink-0 flex items-center justify-center 
                ${comunicado.prioridad === "Alta" ? "bg-rose-100 text-rose-600" : "bg-indigo-100 text-indigo-600"}`}
              >
                {comunicado.prioridad === "Alta" ? (
                  <AlertCircle size={24} />
                ) : (
                  <Info size={24} />
                )}
              </div>

              <div className="flex-1 pr-8">
                <div className="flex items-center gap-3 mb-1">
                  <h4 className="font-bold text-slate-800 text-lg">
                    {comunicado.titulo}
                  </h4>
                  {comunicado.prioridad === "Alta" && (
                    <span className="px-2 py-0.5 rounded-md text-[10px] uppercase font-bold bg-rose-100 text-rose-700">
                      Urgente
                    </span>
                  )}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                  {comunicado.mensaje}
                </p>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                  <Clock size={14} /> Publicado: {comunicado.fecha}
                </div>
              </div>

              <button
                onClick={() => onEliminar(comunicado.id)}
                className="absolute top-5 right-5 text-slate-300 hover:text-rose-500 hover:bg-rose-50 p-2 rounded-lg transition-colors sm:opacity-0 sm:group-hover:opacity-100"
                title="Eliminar comunicado"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))
        ) : (
          <div className="py-12 text-center text-slate-500">
            <Megaphone size={40} className="text-slate-300 mx-auto mb-3" />
            <p className="font-medium">No hay comunicados publicados.</p>
          </div>
        )}
      </div>
    </div>
  );
}
