import React, { useState } from "react";
import {
  Plus,
  Users,
  Clock,
  Calendar as CalendarIcon,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Tent,
  Flame,
  Waves,
  Dumbbell,
} from "lucide-react";
import ModalNuevaReserva from "../../components/admin/zonas/ModalNuevaReserva.jsx";
import ModalGestionZona from "../../components/admin/zonas/ModalGestionZona.jsx";

const zonasData = [
  {
    id: 1,
    nombre: "Salón Comunal Principal",
    icono: <Tent size={32} className="text-indigo-500" />,
    aforo: "50 personas",
    horario: "08:00 AM - 11:00 PM",
    estado: "Disponible",
    colorFondo: "bg-indigo-50",
  },
  {
    id: 2,
    nombre: "Zona BBQ",
    icono: <Flame size={32} className="text-orange-500" />,
    aforo: "15 personas",
    horario: "10:00 AM - 09:00 PM",
    estado: "Reservado hoy",
    colorFondo: "bg-orange-50",
  },
  {
    id: 3,
    nombre: "Piscina Adultos y Niños",
    icono: <Waves size={32} className="text-cyan-500" />,
    aforo: "20 personas",
    horario: "06:00 AM - 08:00 PM",
    estado: "Mantenimiento",
    colorFondo: "bg-cyan-50",
  },
  {
    id: 4,
    nombre: "Gimnasio",
    icono: <Dumbbell size={32} className="text-slate-500" />,
    aforo: "10 personas",
    horario: "24 Horas",
    estado: "Disponible",
    colorFondo: "bg-slate-100",
  },
];

export default function ZonasComunes() {
  const [showModalNueva, setShowModalNueva] = useState(false);
  const [zonaSeleccionada, setZonaSeleccionada] = useState(null);

  const [listaReservas, setListaReservas] = useState([
    {
      id: "RES-101",
      zona: "Salón Comunal Principal",
      residente: "Familia Gómez (Torre 2 - Apto 304)",
      fecha: "2026-11-15",
      horario: "06:00 PM - 11:00 PM",
      estado: "Aprobada",
    },
    {
      id: "RES-102",
      zona: "Zona BBQ",
      residente: "Ana Martínez (Torre 1 - Apto 102)",
      fecha: "Hoy",
      horario: "12:00 PM - 04:00 PM",
      estado: "Pendiente",
    },
    {
      id: "RES-103",
      zona: "Salón Comunal Principal",
      residente: "Carlos Ruiz (Torre 3 - Apto 501)",
      fecha: "2026-11-20",
      horario: "08:00 AM - 01:00 PM",
      estado: "Pendiente",
    },
  ]);

  const reservasDeLaZona = zonaSeleccionada
    ? listaReservas.filter((r) => r.zona === zonaSeleccionada.nombre)
    : [];

  const handleGuardarReserva = (nueva) => {
    setListaReservas([nueva, ...listaReservas]);
  };

  const actualizarEstadoReserva = (idReserva, nuevoEstado) => {
    setListaReservas(
      listaReservas.map((r) =>
        r.id === idReserva ? { ...r, estado: nuevoEstado } : r,
      ),
    );
  };

  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth bg-slate-100 h-full relative">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-800">
            Zonas Comunes
          </h2>
          <p className="text-slate-500 mt-1">
            Gestión de espacios, aforos y calendario de reservas.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setShowModalNueva(true)}
            className="flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white rounded-xl font-semibold shadow-lg transition-all"
          >
            <Plus size={18} /> Nueva Reserva
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {zonasData.map((zona) => (
          <div
            key={zona.id}
            className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all flex flex-col"
          >
            <div className="p-6 border-b border-slate-100 flex gap-4 items-start">
              <div className={`p-4 rounded-2xl ${zona.colorFondo}`}>
                {zona.icono}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-slate-800 leading-tight">
                  {zona.nombre}
                </h3>
                <div className="mt-2 inline-flex">
                  <span
                    className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md font-bold ${
                      zona.estado === "Disponible"
                        ? "bg-emerald-100 text-emerald-700"
                        : zona.estado === "Reservado hoy"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-rose-100 text-rose-700"
                    }`}
                  >
                    {zona.estado === "Disponible" ? (
                      <CheckCircle2 size={14} />
                    ) : zona.estado === "Reservado hoy" ? (
                      <CalendarIcon size={14} />
                    ) : (
                      <XCircle size={14} />
                    )}
                    {zona.estado}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-50/50 space-y-4 flex-1">
              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center border border-slate-200 text-slate-400">
                  <Users size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Aforo Máximo
                  </p>
                  <p className="font-semibold text-sm">{zona.aforo}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center border border-slate-200 text-slate-400">
                  <Clock size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Horario Permitido
                  </p>
                  <p className="font-semibold text-sm">{zona.horario}</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white border-t border-slate-100">
              <button
                onClick={() => setZonaSeleccionada(zona)}
                className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-colors text-sm flex justify-center items-center gap-2"
              >
                <CalendarIcon size={16} /> Ver Calendario / Gestión
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-blue-50 border border-blue-100 p-5 rounded-2xl flex items-start gap-4 text-blue-800">
        <AlertCircle className="shrink-0 mt-0.5" />
        <div>
          <h4 className="font-bold">Información de Reservas</h4>
          <p className="text-sm mt-1 opacity-90">
            Las reservas del salón comunal y la zona BBQ deben realizarse con al
            menos 48 horas de anticipación. El uso de la piscina no requiere
            reserva, pero está sujeto al aforo máximo.
          </p>
        </div>
      </div>

      <ModalNuevaReserva
        isOpen={showModalNueva}
        onClose={() => setShowModalNueva(false)}
        zonasData={zonasData}
        onSave={handleGuardarReserva}
      />

      <ModalGestionZona
        zona={zonaSeleccionada}
        reservas={reservasDeLaZona}
        onClose={() => setZonaSeleccionada(null)}
        onActualizarEstado={actualizarEstadoReserva}
      />
    </div>
  );
}
