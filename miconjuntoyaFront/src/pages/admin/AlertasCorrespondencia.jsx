import { Package, Send, Trash2, Clock, Mail } from "lucide-react";
import { useState } from "react";

export default function AlertasCorrespondencia() {
  const [alertas, setAlertas] = useState([
    {
      id: 1,
      apto: "304",
      torre: "2",
      tipo: "Paquete",
      titulo: "Paquete de MercadoLibre",
      fecha: "Hoy, 10:30 AM",
    },
    {
      id: 2,
      apto: "102",
      torre: "1",
      tipo: "Recibo",
      titulo: "Recibo de Enel (Luz)",
      fecha: "Ayer, 02:15 PM",
    },
  ]);

  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-10 bg-slate-100 h-full">
      <div className="mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-800">
          Alertas y Correspondencia
        </h2>
        <p className="text-slate-500 mt-1">
          Notifica a los residentes sobre la llegada de paquetes o recibos.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-1">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2">
              <Package size={20} /> Registrar Llegada
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-bold text-slate-700 mb-1">
                    Torre
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. 1"
                    className="w-full px-4 py-2 bg-slate-50 border rounded-xl outline-none"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-bold text-slate-700 mb-1">
                    Apto
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. 304"
                    className="w-full px-4 py-2 bg-slate-50 border rounded-xl outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">
                  Tipo
                </label>
                <select className="w-full px-4 py-2 bg-slate-50 border rounded-xl outline-none">
                  <option>Paquete / Domicilio</option>
                  <option>Recibo / Factura</option>
                  <option>Mensaje de Administración</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">
                  Detalle
                </label>
                <input
                  type="text"
                  placeholder="Ej. Caja de Amazon"
                  className="w-full px-4 py-2 bg-slate-50 border rounded-xl outline-none"
                />
              </div>
              <button className="w-full flex justify-center gap-2 px-5 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold transition-all">
                <Send size={18} /> Enviar Notificación
              </button>
            </form>
          </div>
        </div>

        <div className="xl:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-5 border-b flex justify-between items-center bg-slate-50/50">
            <h3 className="font-bold text-lg text-slate-800">
              Últimas Entregas Registradas
            </h3>
          </div>
          <div className="p-5 space-y-4">
            {alertas.map((alerta) => (
              <div
                key={alerta.id}
                className="p-4 border rounded-xl flex items-center justify-between gap-4 bg-slate-50"
              >
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                    {alerta.tipo === "Paquete" ? (
                      <Package size={20} />
                    ) : (
                      <Mail size={20} />
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">
                      {alerta.titulo}
                    </h4>
                    <p className="text-sm text-slate-600">
                      Apto {alerta.apto} - Torre {alerta.torre}
                    </p>
                    <div className="flex items-center gap-1 mt-1 text-xs text-slate-400 font-semibold">
                      <Clock size={12} /> {alerta.fecha}
                    </div>
                  </div>
                </div>
                <button className="text-slate-400 hover:text-rose-500 transition-colors">
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
