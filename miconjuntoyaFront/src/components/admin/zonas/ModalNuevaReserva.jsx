import { CalendarPlus, X } from "lucide-react";
import { useState } from "react";

export default function ModalNuevaReserva({
  isOpen,
  onClose,
  zonasData,
  onSave,
}) {
  const [zona, setZona] = useState(zonasData[0]?.nombre || "");
  const [residente, setResidente] = useState("");
  const [torre, setTorre] = useState("");
  const [apto, setApto] = useState("");
  const [fecha, setFecha] = useState("");
  const [horario, setHorario] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !residente.trim() ||
      !torre.trim() ||
      !apto.trim() ||
      !fecha ||
      !horario
    )
      return;

    const nuevaReserva = {
      id: `RES-${Math.floor(Math.random() * 900) + 100}`,
      zona,
      residente: `${residente} (Torre ${torre} - Apto ${apto})`,
      fecha,
      horario,
      estado: "Pendiente",
    };

    onSave(nuevaReserva);
    onClose();
    setResidente("");
    setTorre("");
    setApto("");
    setFecha("");
    setHorario("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-all">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-slate-50/50">
          <h3 className="font-bold text-xl text-slate-800 flex items-center gap-2">
            <CalendarPlus className="text-orange-500" /> Crear Reserva Directa
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form
          id="formReserva"
          onSubmit={handleSubmit}
          className="p-6 overflow-y-auto space-y-4"
        >
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">
              Zona a Reservar
            </label>
            <select
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 transition-all text-slate-700"
              value={zona}
              onChange={(e) => setZona(e.target.value)}
            >
              {zonasData.map((z) => (
                <option key={z.id} value={z.nombre}>
                  {z.nombre}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">
              Nombre del Residente
            </label>
            <input
              type="text"
              placeholder="Ej. Familia Gómez"
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              value={residente}
              onChange={(e) => setResidente(e.target.value)}
              required
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-bold text-slate-700 mb-1">
                Torre
              </label>
              <input
                type="text"
                placeholder="Ej. 2"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 transition-all"
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
                placeholder="Ej. 304"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                value={apto}
                onChange={(e) => setApto(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-bold text-slate-700 mb-1">
                Fecha
              </label>
              <input
                type="date"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 transition-all text-slate-700"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-bold text-slate-700 mb-1">
                Horario
              </label>
              <input
                type="text"
                placeholder="Ej. 06:00 PM - 10:00 PM"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                value={horario}
                onChange={(e) => setHorario(e.target.value)}
                required
              />
            </div>
          </div>
        </form>

        <div className="p-5 border-t border-slate-100 flex flex-col sm:flex-row justify-end gap-3 bg-slate-50">
          <button
            onClick={onClose}
            type="button"
            className="w-full sm:w-auto px-5 py-2.5 text-slate-600 font-bold hover:bg-slate-200 rounded-xl transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            form="formReserva"
            className="w-full sm:w-auto px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-sm"
          >
            Guardar Reserva
          </button>
        </div>
      </div>
    </div>
  );
}
