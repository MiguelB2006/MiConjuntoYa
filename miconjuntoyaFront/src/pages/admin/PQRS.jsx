import { useState } from "react";
import {
  Search,
  Plus,
  MoreHorizontal,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const pqrsData = [
  {
    id: 1,
    residente: "Carlos Ramírez",
    apto: "304",
    tipo: "Queja",
    asunto: "Ruido excesivo en el piso 4 a altas horas de la noche.",
    fecha: "22 Oct 2026",
    estado: "Pendiente",
  },
  {
    id: 2,
    residente: "Ana Gómez",
    apto: "102",
    tipo: "Petición",
    asunto: "Solicitud de reserva del salón comunal para el sábado.",
    fecha: "21 Oct 2026",
    estado: "Resuelto",
  },
  {
    id: 3,
    residente: "Juan Pérez",
    apto: "512",
    tipo: "Reclamo",
    asunto: "Cobro doble en la cuota de administración de este mes.",
    fecha: "20 Oct 2026",
    estado: "En revisión",
  },
  {
    id: 4,
    residente: "Familia Martínez",
    apto: "401",
    tipo: "Sugerencia",
    asunto: "Instalar más canecas de basura cerca al parqueadero.",
    fecha: "19 Oct 2026",
    estado: "Resuelto",
  },
  {
    id: 5,
    residente: "María López",
    apto: "205",
    tipo: "Queja",
    asunto: "Mascota del apto 206 dejando suciedad en el pasillo.",
    fecha: "22 Oct 2026",
    estado: "Pendiente",
  },
];

export default function PQRS() {
  const [busqueda, setBusqueda] = useState("");
  const [filtroEstado, setFiltroEstado] = useState("Todos");

  // Filtro de la tabla
  const pqrsFiltradas = pqrsData.filter((item) => {
    const coincideBusqueda =
      item.residente.toLowerCase().includes(busqueda.toLowerCase()) ||
      item.apto.includes(busqueda) ||
      item.asunto.toLowerCase().includes(busqueda.toLowerCase());

    const coincideEstado =
      filtroEstado === "Todos" || item.estado === filtroEstado;
    return coincideBusqueda && coincideEstado;
  });

  // Función para dar color al tipo de PQRS
  const getColorTipo = (tipo) => {
    switch (tipo) {
      case "Queja":
        return "bg-rose-100 text-rose-700";
      case "Reclamo":
        return "bg-orange-100 text-orange-700";
      case "Petición":
        return "bg-blue-100 text-blue-700";
      case "Sugerencia":
        return "bg-emerald-100 text-emerald-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth bg-slate-100 h-full">
      {/* Cabecera */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-800">
            Gestión de PQRS
          </h2>
          <p className="text-slate-500 mt-1">
            Buzón de Peticiones, Quejas, Reclamos y Sugerencias.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white rounded-xl font-semibold shadow-lg transition-all">
            <Plus size={18} /> Nueva PQRS
          </button>
        </div>
      </div>

      {/* Herramientas (Buscador y Filtros) */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="relative w-full md:w-96">
          <Search
            className="absolute left-3 top-2.5 text-slate-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Buscar por residente, apto o asunto..."
            className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl w-full focus:ring-2 focus:ring-indigo-500 outline-none text-sm transition-all"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
        <div className="flex bg-slate-100 p-1 rounded-xl w-full md:w-auto">
          {["Todos", "Pendiente", "En revisión", "Resuelto"].map((estado) => (
            <button
              key={estado}
              onClick={() => setFiltroEstado(estado)}
              className={`flex-1 md:flex-none px-4 py-1.5 text-sm font-semibold rounded-lg transition-all ${
                filtroEstado === estado
                  ? "bg-white text-indigo-700 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {estado}
            </button>
          ))}
        </div>
      </div>

      {/* Tabla */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-100 text-slate-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-bold">Residente</th>
                <th className="p-4 font-bold">Tipo</th>
                <th className="p-4 font-bold min-w-62.5">Asunto</th>
                <th className="p-4 font-bold">Fecha</th>
                <th className="p-4 font-bold">Estado</th>
                <th className="p-4 font-bold text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {pqrsFiltradas.length > 0 ? (
                pqrsFiltradas.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="p-4">
                      <p className="font-bold text-slate-700 text-sm">
                        {item.residente}
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Apto {item.apto}
                      </p>
                    </td>
                    <td className="p-4">
                      <span
                        className={`text-xs px-2.5 py-1 rounded-md font-bold ${getColorTipo(item.tipo)}`}
                      >
                        {item.tipo}
                      </span>
                    </td>
                    <td className="p-4">
                      <p
                        className="text-sm text-slate-600 truncate max-w-xs"
                        title={item.asunto}
                      >
                        {item.asunto}
                      </p>
                    </td>
                    <td className="p-4 text-sm text-slate-500 font-medium">
                      {item.fecha}
                    </td>
                    <td className="p-4">
                      <div
                        className={`flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-lg font-bold w-max ${
                          item.estado === "Resuelto"
                            ? "bg-emerald-100 text-emerald-700"
                            : item.estado === "En revisión"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-rose-100 text-rose-700"
                        }`}
                      >
                        {item.estado === "Resuelto" ? (
                          <CheckCircle2 size={14} />
                        ) : item.estado === "En revisión" ? (
                          <Clock size={14} />
                        ) : (
                          <AlertCircle size={14} />
                        )}
                        {item.estado}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-center gap-2">
                        {item.estado !== "Resuelto" && (
                          <button className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-lg hover:bg-indigo-100 transition-colors">
                            Atender
                          </button>
                        )}
                        <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                          <MoreHorizontal size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="p-8 text-center text-slate-500">
                    No se encontraron PQRS con estos filtros.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
