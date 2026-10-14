import React, { useState } from "react";
import {
  Home,
  Users,
  MessageSquare,
  Calendar,
  Bell,
  Search,
  Menu,
  Plus,
  CheckCircle,
  Clock,
} from "lucide-react";

// Datos simulados para que el prototipo se vea con información real
const visitantesRecientes = [
  {
    id: 1,
    nombre: "Carlos Ramírez",
    tipo: "Familiar",
    apto: "304",
    hora: "10:30 AM",
    estado: "En conjunto",
  },
  {
    id: 2,
    nombre: "Domicilios Rapidos",
    tipo: "Servicio",
    apto: "512",
    hora: "11:15 AM",
    estado: "Salió",
  },
  {
    id: 3,
    nombre: "Ana Gómez",
    tipo: "Visita",
    apto: "102",
    hora: "01:45 PM",
    estado: "En conjunto",
  },
];

const pqrsPendientes = [
  { id: 1, asunto: "Ruido en el piso 4", fecha: "Hoy", estado: "Pendiente" },
  {
    id: 2,
    asunto: "Foco fundido en pasillo",
    fecha: "Ayer",
    estado: "En revisión",
  },
];

export default function App() {
  // Estado simple para abrir/cerrar menú en celulares
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <div className="flex h-screen bg-slate-100 font-sans overflow-hidden">
      <aside
        className={`w-64 bg-indigo-900 text-white flex flex-col transition-all duration-300 ${menuAbierto ? "block" : "hidden"} md:flex`}
      >
        {/* Título del Proyecto */}
        <div className="h-20 flex items-center justify-center border-b border-indigo-800">
          <h1 className="text-3xl font-extrabold tracking-tight">
            MiConjunto<span className="text-emerald-400">Ya</span>
          </h1>
        </div>

        {/* Enlaces de Navegación con efectos hover para que se vea dinámico */}
        <nav className="flex-1 px-4 py-8 space-y-3 overflow-y-auto">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 bg-indigo-800/80 rounded-xl font-medium border-l-4 border-emerald-400 shadow-md"
          >
            <Home size={20} /> Panel Principal
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 hover:bg-indigo-800 rounded-xl transition-colors text-indigo-200 hover:text-white"
          >
            <Users size={20} /> Visitantes
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 hover:bg-indigo-800 rounded-xl transition-colors text-indigo-200 hover:text-white"
          >
            <MessageSquare size={20} /> PQRS / Quejas
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 hover:bg-indigo-800 rounded-xl transition-colors text-indigo-200 hover:text-white"
          >
            <Calendar size={20} /> Zonas Comunes
          </a>
        </nav>

        <div className="p-4 border-t border-indigo-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold shadow-lg">
              A
            </div>
            <div>
              <p className="text-sm font-bold">Administrador</p>
              <p className="text-xs text-indigo-300">En línea</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Cabecera (Header) */}
        <header className="h-20 bg-white shadow-sm flex items-center justify-between px-6 lg:px-10">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMenuAbierto(!menuAbierto)}
              className="md:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg"
            >
              <Menu size={24} />
            </button>
            <div className="relative hidden sm:block">
              <Search
                className="absolute left-3 top-2.5 text-slate-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Buscar residente o placa..."
                className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full w-64 focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
              />
            </div>
          </div>

          <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
            <Bell size={24} />
            <span className="absolute top-1 right-1 w-3 h-3 bg-rose-500 rounded-full border-2 border-white"></span>
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth">
          {/* Bienvenida y Botones Rápidos (Diseño Chévere con Degradados) */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-800">
                ¡Hola, Administrador! 👋
              </h2>
              <p className="text-slate-500 mt-1">
                Este es el resumen de tu conjunto para hoy.
              </p>
            </div>

            <div className="flex gap-3">
              {/* Botones con degradados típicos de un diseño moderno y creativo */}
              <button className="flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                <Plus size={18} /> Nuevo Visitante
              </button>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-indigo-100 text-indigo-700 hover:bg-indigo-50 rounded-xl font-semibold shadow-sm hover:shadow-md transition-all">
                Revisar PQRS
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-slate-100 flex items-center gap-5">
              <div className="p-4 bg-blue-100 text-blue-600 rounded-xl">
                <Users size={28} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                  Visitantes Hoy
                </p>
                <p className="text-3xl font-black text-slate-700 mt-1">24</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-slate-100 flex items-center gap-5">
              <div className="p-4 bg-rose-100 text-rose-600 rounded-xl">
                <MessageSquare size={28} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                  Quejas (PQRS)
                </p>
                <p className="text-3xl font-black text-slate-700 mt-1">5</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-slate-100 flex items-center gap-5">
              <div className="p-4 bg-amber-100 text-amber-600 rounded-xl">
                <Calendar size={28} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                  Reservas
                </p>
                <p className="text-3xl font-black text-slate-700 mt-1">3</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Lista de Visitantes */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <h3 className="font-bold text-lg text-slate-800">
                  Últimos Ingresos
                </h3>
                <a
                  href="#"
                  className="text-sm text-indigo-600 font-semibold hover:underline"
                >
                  Ver todos
                </a>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  {visitantesRecientes.map((visita) => (
                    <div
                      key={visita.id}
                      className="flex justify-between items-center p-3 hover:bg-slate-50 rounded-xl transition-colors border border-transparent hover:border-slate-100"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
                          {visita.nombre.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-slate-700">
                            {visita.nombre}
                          </p>
                          <p className="text-xs text-slate-500 font-medium">
                            Apto {visita.apto} • {visita.tipo}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-slate-700">
                          {visita.hora}
                        </p>
                        <span
                          className={`text-xs px-2 py-1 rounded-md font-bold inline-block mt-1 ${
                            visita.estado === "En conjunto"
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {visita.estado}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <h3 className="font-bold text-lg text-slate-800">
                  Atención de Quejas
                </h3>
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
                        <p className="font-bold text-slate-700">
                          {pqrs.asunto}
                        </p>
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
          </div>
        </div>
      </main>
    </div>
  );
}
