import { CheckCircle, Clock } from "lucide-react";

const pqrsPendientes = [
  { id: 1, asunto: "Ruido en el piso 4", fecha: "Hoy", estado: "Pendiente" },
  {
    id: 2,
    asunto: "Foco fundido en pasillo",
    fecha: "Ayer",
    estado: "En revisión",
  },
];

export default function PQRSList() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
        <h3 className="font-bold text-lg text-slate-800">Atención de Quejas</h3>
        <a
          href="#"
          className="text-sm text-indigo-600 font-semibold hover:underline"
        >
          Gestionar
        </a>
      </div>
      <div className="p-5">
        <div className="space-y-4">
          {pqrsPendientes.map((pqrs) => (
            <div
              key={pqrs.id}
              className="flex gap-4 p-4 border border-slate-100 rounded-xl hover:shadow-md transition-shadow bg-slate-50/30"
            >
              <div className="mt-1">
                {pqrs.estado === "Pendiente" ? (
                  <Clock className="text-rose-500" size={24} />
                ) : (
                  <CheckCircle className="text-amber-500" size={24} />
                )}
              </div>
              <div>
                <p className="font-bold text-slate-700">{pqrs.asunto}</p>
                <p className="text-sm text-slate-500 mt-1">
                  Reportado: {pqrs.fecha}
                </p>
                <button className="mt-3 text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-lg hover:bg-indigo-100 transition-colors">
                  Atender caso
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
