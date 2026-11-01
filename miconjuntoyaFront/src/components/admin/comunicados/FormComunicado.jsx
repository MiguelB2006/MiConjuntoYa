import { Megaphone, Send, Info, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function FormComunicado({ onPublicar }) {
  const [titulo, setTitulo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [prioridad, setPrioridad] = useState("Normal");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo.trim() || !mensaje.trim()) return;

    onPublicar({
      id: Date.now(),
      titulo,
      mensaje,
      fecha: "Hace un momento",
      prioridad,
    });

    setTitulo("");
    setMensaje("");
    setPrioridad("Normal");
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 sticky top-6">
      <h3 className="font-bold text-lg text-slate-800 mb-5 flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
          <Megaphone size={20} />
        </div>
        Nuevo Comunicado
      </h3>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">
            Título del Anuncio
          </label>
          <input
            type="text"
            placeholder="Ej. Corte de Agua Programado"
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>

        {/* SELECTOR DE PRIORIDAD CON BOTONES */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">
            Nivel de Importancia
          </label>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setPrioridad("Normal")}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold transition-all text-sm ${
                prioridad === "Normal"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-slate-50 text-slate-500 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              <Info size={16} /> Normal
            </button>
            <button
              type="button"
              onClick={() => setPrioridad("Alta")}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold transition-all text-sm ${
                prioridad === "Alta"
                  ? "bg-rose-500 text-white shadow-md"
                  : "bg-slate-50 text-slate-500 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              <AlertCircle size={16} /> Urgente
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">
            Mensaje
          </label>
          <textarea
            rows="5"
            placeholder="Escribe el cuerpo del comunicado detalladamente..."
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm resize-none"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full mt-4 flex justify-center items-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-md"
        >
          <Send size={18} /> Publicar Ahora
        </button>
      </form>
    </div>
  );
}
