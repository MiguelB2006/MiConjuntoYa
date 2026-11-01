import { X, ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function ModalNuevoVisitante({ isOpen, onClose, onSave }) {
  const [nombre, setNombre] = useState("");
  const [documento, setDocumento] = useState("");
  const [torre, setTorre] = useState("");
  const [apto, setApto] = useState("");
  const [tipo, setTipo] = useState("Familiar / Amigo");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim() || !torre.trim() || !apto.trim()) return;

    const horaActual = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    onSave({
      id: Date.now(),
      nombre,
      documento,
      torre,
      apto,
      tipo,
      ingreso: horaActual,
      estado: "En conjunto",
    });

    setNombre("");
    setDocumento("");
    setTorre("");
    setApto("");
    setTipo("Familiar / Amigo");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-all">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-slate-50/50">
          <h3 className="font-bold text-xl text-slate-800 flex items-center gap-2">
            <ShieldCheck className="text-indigo-600" /> Nuevo Registro de Visita
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-colors shrink-0"
          >
            <X size={24} />
          </button>
        </div>

        <form
          id="formVisitante"
          onSubmit={handleSubmit}
          className="p-6 overflow-y-auto space-y-4"
        >
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">
              Nombre Completo
            </label>
            <input
              type="text"
              placeholder="Ej. Ana Martínez"
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">
              Documento de Identidad (Opcional)
            </label>
            <input
              type="text"
              placeholder="Ej. 1023456789"
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              value={documento}
              onChange={(e) => setDocumento(e.target.value)}
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-bold text-slate-700 mb-1">
                Torre
              </label>
              <input
                type="text"
                placeholder="Ej. 1"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                value={torre}
                onChange={(e) => setTorre(e.target.value)}
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-bold text-slate-700 mb-1">
                Apartamento
              </label>
              <input
                type="text"
                placeholder="Ej. 402"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                value={apto}
                onChange={(e) => setApto(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">
              Tipo de Visita
            </label>
            <select
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-700"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
            >
              <option>Familiar / Amigo</option>
              <option>Domicilio / Repartidor</option>
              <option>Servicio Técnico / Mantenimiento</option>
            </select>
          </div>
        </form>

        <div className="p-5 border-t border-slate-100 flex flex-col sm:flex-row justify-end gap-3 bg-slate-50">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-slate-600 font-bold hover:bg-slate-200 rounded-xl transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            form="formVisitante"
            className="w-full sm:w-auto px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-sm"
          >
            Guardar Ingreso
          </button>
        </div>
      </div>
    </div>
  );
}
