import { Search, Filter, Eye, Inbox, MessageSquare } from "lucide-react";

export default function TablaPQRS({
  pqrsList,
  busqueda,
  setBusqueda,
  filtroEstado,
  setFiltroEstado,
  onAtender,
}) {
  const getEstadoBadge = (estado) => {
    switch (estado) {
      case "Pendiente":
        return "bg-amber-100 text-amber-700 border-amber-200";
      case "En revisión":
        return "bg-indigo-100 text-indigo-700 border-indigo-200";
      case "Resuelto":
        return "bg-emerald-100 text-emerald-700 border-emerald-200";
      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  const getTipoBadge = (tipo) => {
    switch (tipo) {
      case "Petición":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Queja":
        return "bg-orange-100 text-orange-700 border-orange-200";
      case "Reclamo":
        return "bg-rose-100 text-rose-700 border-rose-200";
      case "Sugerencia":
        return "bg-purple-100 text-purple-700 border-purple-200";
      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  return (
    <>
      {/* Buscador y Filtros */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-6 flex flex-col sm:flex-row items-center gap-4">
        <div className="flex items-center gap-3 w-full sm:flex-1">
          <Search className="text-slate-400 shrink-0" size={20} />
          <input
            type="text"
            placeholder="Buscar por radicado, asunto o residente..."
            className="w-full bg-transparent outline-none text-slate-700"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        <div className="w-full sm:w-auto flex items-center gap-2 border-t sm:border-t-0 sm:border-l border-slate-200 pt-3 sm:pt-0 sm:pl-4">
          <Filter size={18} className="text-slate-400 shrink-0" />
          <select
            className="w-full sm:w-auto bg-transparent outline-none text-sm text-slate-600 font-medium cursor-pointer"
            value={filtroEstado}
            onChange={(e) => setFiltroEstado(e.target.value)}
          >
            <option value="">Todos los estados</option>
            <option value="Pendiente">Solo Pendientes</option>
            <option value="En revisión">En revisión</option>
            <option value="Resuelto">Resueltos</option>
          </select>
        </div>
      </div>

      {/* Tabla */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-max">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 text-sm">
                <th className="p-4 font-bold whitespace-nowrap">Radicado</th>
                <th className="p-4 font-bold whitespace-nowrap">Residente</th>
                <th className="p-4 font-bold whitespace-nowrap">Tipo</th>
                <th className="p-4 font-bold whitespace-nowrap">Asunto</th>
                <th className="p-4 font-bold whitespace-nowrap">Fecha</th>
                <th className="p-4 font-bold whitespace-nowrap">Estado</th>
                <th className="p-4 font-bold text-center whitespace-nowrap">
                  Acción
                </th>
              </tr>
            </thead>
            <tbody>
              {pqrsList.length > 0 ? (
                pqrsList.map((pqrs) => (
                  <tr
                    key={pqrs.id}
                    className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="p-4 text-slate-500 font-medium whitespace-nowrap text-sm">
                      {pqrs.id}
                    </td>
                    <td className="p-4 whitespace-nowrap">
                      <p className="font-bold text-slate-800">
                        {pqrs.residente}
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Torre {pqrs.torre} - Apto {pqrs.apto}
                      </p>
                    </td>
                    <td className="p-4 whitespace-nowrap">
                      <span
                        className={`px-2.5 py-1 rounded-md text-xs font-bold border inline-block ${getTipoBadge(pqrs.tipo)}`}
                      >
                        {pqrs.tipo}
                      </span>
                    </td>
                    <td
                      className="p-4 text-slate-800 whitespace-nowrap max-w-62.5 truncate"
                      title={pqrs.asunto}
                    >
                      {pqrs.asunto}
                    </td>
                    <td className="p-4 text-slate-500 whitespace-nowrap text-sm font-medium">
                      {pqrs.fecha}
                    </td>
                    <td className="p-4 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold border inline-block ${getEstadoBadge(pqrs.estado)}`}
                      >
                        {pqrs.estado}
                      </span>
                    </td>
                    <td className="p-4 text-center whitespace-nowrap">
                      <button
                        onClick={() => onAtender(pqrs)}
                        className="text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg text-sm font-bold transition-colors flex items-center gap-1.5 mx-auto"
                      >
                        <Eye size={16} /> Atender
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="p-10 text-center text-slate-500">
                    <div className="flex flex-col items-center justify-center gap-3">
                      <Inbox size={40} className="text-slate-300" />
                      <p className="font-medium">
                        No se encontraron resultados para tu búsqueda.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
