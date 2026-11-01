import { Clock, CheckCircle, LogOut } from "lucide-react";

export default function TablaVisitantes({ visitantes, onMarcarSalida }) {
  const getEstadoBadge = (estado) => {
    return estado === "En conjunto"
      ? "bg-emerald-100 text-emerald-700 border-emerald-200"
      : "bg-slate-100 text-slate-600 border-slate-200";
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-max">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 text-sm">
              <th className="p-4 font-bold whitespace-nowrap">Visitante</th>
              <th className="p-4 font-bold whitespace-nowrap">Destino</th>
              <th className="p-4 font-bold whitespace-nowrap">Tipo</th>
              <th className="p-4 font-bold whitespace-nowrap">Hora Ingreso</th>
              <th className="p-4 font-bold whitespace-nowrap">Estado</th>
              <th className="p-4 font-bold text-center whitespace-nowrap">
                Acción
              </th>
            </tr>
          </thead>
          <tbody>
            {visitantes.length > 0 ? (
              visitantes.map((v) => (
                <tr
                  key={v.id}
                  className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors"
                >
                  <td className="p-4 font-bold text-slate-800 whitespace-nowrap">
                    {v.nombre}
                  </td>
                  <td className="p-4 text-slate-600 whitespace-nowrap">
                    Torre {v.torre} - Apto {v.apto}
                  </td>
                  <td className="p-4 text-slate-600 whitespace-nowrap">
                    {v.tipo}
                  </td>
                  <td className="p-4 text-slate-600 whitespace-nowrap">
                    <div className="flex items-center gap-1.5">
                      <Clock size={16} className="text-slate-400" /> {v.ingreso}
                    </div>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold border inline-block ${getEstadoBadge(v.estado)}`}
                    >
                      {v.estado}
                    </span>
                  </td>
                  <td className="p-4 text-center whitespace-nowrap">
                    {v.estado === "En conjunto" ? (
                      <button
                        onClick={() => onMarcarSalida(v.id)}
                        className="text-rose-500 hover:bg-rose-50 px-3 py-1.5 rounded-lg text-sm font-bold transition-colors flex items-center gap-1.5 mx-auto"
                      >
                        <LogOut size={16} /> Marcar Salida
                      </button>
                    ) : (
                      <span className="text-slate-400 text-sm font-medium flex items-center justify-center gap-1.5">
                        <CheckCircle size={16} /> Finalizado
                      </span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="p-8 text-center text-slate-500 font-medium"
                >
                  No se encontraron visitantes.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
