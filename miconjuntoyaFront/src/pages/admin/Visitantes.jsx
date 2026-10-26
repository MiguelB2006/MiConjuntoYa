import {
  Search,
  Plus,
  MoreHorizontal,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";
const visitantesData = [
  {
    id: 1,
    nombre: "Carlos Ramírez",
    tipo: "Familiar",
    residente: "Familia Gómez",
    apto: "304",
    entrada: "10:30 AM",
    salida: "--:--",
    estado: "En conjunto",
  },
  {
    id: 2,
    nombre: "Domicilios Rápidos",
    tipo: "Servicio",
    residente: "Juan Pérez",
    apto: "512",
    entrada: "11:15 AM",
    salida: "11:30 AM",
    estado: "Salió",
  },
  {
    id: 3,
    nombre: "Ana Gómez",
    tipo: "Visita",
    residente: "María López",
    apto: "102",
    entrada: "01:45 PM",
    salida: "--:--",
    estado: "En conjunto",
  },
  {
    id: 4,
    nombre: "Técnico Claro",
    tipo: "Mantenimiento",
    residente: "Admin",
    apto: "Zonas Comunes",
    entrada: "09:00 AM",
    salida: "10:30 AM",
    estado: "Salió",
  },
  {
    id: 5,
    nombre: "Luis Martínez",
    tipo: "Familiar",
    residente: "Familia Martínez",
    apto: "401",
    entrada: "02:15 PM",
    salida: "--:--",
    estado: "En conjunto",
  },
];

export default function Visitantes() {
  const [busqueda, setBusqueda] = useState("");
  const [filtroEstado, setFiltroEstado] = useState("Todos");

  const visitantesFiltrados = visitantesData.filter((visita) => {
    const coincideBusqueda =
      visita.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      visita.apto.includes(busqueda) ||
      visita.residente.toLowerCase().includes(busqueda.toLowerCase());

    const coincideEstado =
      filtroEstado === "Todos" || visita.estado === filtroEstado;
    return coincideBusqueda && coincideEstado;
  });

  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth bg-slate-100 h-full">
      {/* Cabecera */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-800">
            Gestión de Visitantes
          </h2>
          <p className="text-slate-500 mt-1">
            Control de ingresos y salidas del conjunto residencial.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
            <Plus size={18} /> Registrar Ingreso
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
            placeholder="Buscar por nombre, residente o apto..."
            className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl w-full focus:ring-2 focus:ring-indigo-500 outline-none text-sm transition-all"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
        <div className="flex bg-slate-100 p-1 rounded-xl w-full md:w-auto">
          {["Todos", "En conjunto", "Salió"].map((estado) => (
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

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-100 text-slate-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-bold">Visitante</th>
                <th className="p-4 font-bold">Tipo</th>
                <th className="p-4 font-bold">Se dirige a</th>
                <th className="p-4 font-bold">Ingreso</th>
                <th className="p-4 font-bold">Estado</th>
                <th className="p-4 font-bold text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {visitantesFiltrados.length > 0 ? (
                visitantesFiltrados.map((visita) => (
                  <tr
                    key={visita.id}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm">
                          {visita.nombre.charAt(0)}
                        </div>
                        <p className="font-bold text-slate-700 text-sm">
                          {visita.nombre}
                        </p>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md font-medium">
                        {visita.tipo}
                      </span>
                    </td>
                    <td className="p-4">
                      <p className="text-sm font-bold text-slate-700">
                        Apto {visita.apto}
                      </p>
                      <p className="text-xs text-slate-500">
                        {visita.residente}
                      </p>
                    </td>
                    <td className="p-4 text-sm text-slate-600 font-medium">
                      {visita.entrada}
                    </td>
                    <td className="p-4">
                      <div
                        className={`flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-lg font-bold w-max ${
                          visita.estado === "En conjunto"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {visita.estado === "En conjunto" ? (
                          <CheckCircle2 size={14} />
                        ) : (
                          <Clock size={14} />
                        )}
                        {visita.estado}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-center gap-2">
                        {visita.estado === "En conjunto" && (
                          <button className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-lg hover:bg-indigo-100 transition-colors">
                            Marcar Salida
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
                    No se encontraron visitantes.
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
