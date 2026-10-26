import { useState } from "react";
import {
  Megaphone,
  Send,
  AlertTriangle,
  Info,
  Calendar as CalendarIcon,
  MoreHorizontal,
} from "lucide-react";

const comunicadosIniciales = [
  {
    id: 1,
    titulo: "Corte de agua programado",
    tipo: "Urgente",
    mensaje:
      "Se informa que el día de mañana habrá un corte de agua desde las 8 AM hasta las 2 PM por mantenimiento de motobombas.",
    fecha: "24 Oct 2026",
    autor: "Administración",
  },
  {
    id: 2,
    titulo: "Asamblea General Ordinaria",
    tipo: "Informativo",
    mensaje:
      "Los invitamos a la asamblea anual que se llevará a cabo en el salón comunal principal el próximo sábado a las 9:00 AM.",
    fecha: "20 Oct 2026",
    autor: "Administración",
  },
];

export default function Comunicados() {
  const [tipo, setTipo] = useState("Informativo");

  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth bg-slate-100 h-full">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-800">
            Comunicados
          </h2>
          <p className="text-slate-500 mt-1">
            Publica anuncios y alertas en el muro de los residentes.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-5 border-b border-slate-100 bg-slate-50/50 flex items-center gap-3">
              <Megaphone className="text-indigo-600" size={20} />
              <h3 className="font-bold text-lg text-slate-800">
                Redactar Anuncio
              </h3>
            </div>

            <div className="p-5 space-y-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">
                  Título del comunicado
                </label>
                <input
                  type="text"
                  placeholder="Ej. Mantenimiento de áreas..."
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">
                  Nivel de importancia
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setTipo("Informativo")}
                    className={`flex items-center justify-center gap-2 py-2 border rounded-xl text-sm font-bold transition-all ${tipo === "Informativo" ? "bg-blue-50 border-blue-200 text-blue-700" : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50"}`}
                  >
                    <Info size={16} /> Informativo
                  </button>
                  <button
                    onClick={() => setTipo("Urgente")}
                    className={`flex items-center justify-center gap-2 py-2 border rounded-xl text-sm font-bold transition-all ${tipo === "Urgente" ? "bg-rose-50 border-rose-200 text-rose-700" : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50"}`}
                  >
                    <AlertTriangle size={16} /> Urgente
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">
                  Mensaje
                </label>
                <textarea
                  rows="5"
                  placeholder="Escribe los detalles aquí..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-sm transition-all resize-none"
                ></textarea>
              </div>

              <button className="w-full flex items-center justify-center gap-2 py-3 bg-linear-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white rounded-xl font-bold shadow-md transition-all">
                <Send size={18} /> Publicar ahora
              </button>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden h-full">
            <div className="p-5 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
              <h3 className="font-bold text-lg text-slate-800">
                Historial de Publicaciones
              </h3>
            </div>

            <div className="p-5 space-y-4">
              {comunicadosIniciales.map((comunicado) => (
                <div
                  key={comunicado.id}
                  className="flex gap-4 p-5 border border-slate-100 rounded-2xl hover:shadow-md transition-shadow bg-white relative group"
                >
                  <div className="shrink-0 mt-1">
                    {comunicado.tipo === "Urgente" ? (
                      <div className="p-3 bg-rose-100 text-rose-600 rounded-xl">
                        <AlertTriangle size={24} />
                      </div>
                    ) : (
                      <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                        <Info size={24} />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 pr-8">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-slate-800 text-lg">
                        {comunicado.titulo}
                      </h4>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                          comunicado.tipo === "Urgente"
                            ? "bg-rose-100 text-rose-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {comunicado.tipo}
                      </span>
                    </div>

                    <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                      {comunicado.mensaje}
                    </p>

                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <CalendarIcon size={14} /> {comunicado.fecha}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-[10px] text-slate-600">
                          A
                        </div>
                        {comunicado.autor}
                      </div>
                    </div>
                  </div>

                  <button className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                    <MoreHorizontal size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
