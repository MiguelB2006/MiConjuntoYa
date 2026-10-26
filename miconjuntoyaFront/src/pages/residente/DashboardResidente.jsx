import { Users, Calendar, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import StatCard from "../../components/shared/StatCard";
import NotificacionesResidente from "../../components/residente/NotificacionesResidente";
import MisVisitasList from "../../components/residente/MisVisitasList";

// TODO: Reemplazar esto con estados de React (useState) y llamadas al backend (useEffect/fetch)
const mockUsuario = {
  nombre: "Familia Gómez",
  apartamento: "304",
  torre: "2",
  estadisticas: { visitasMes: 12, proximasReservas: 1 },
};

const mockNotificaciones = [
  {
    id: 1,
    tipo: "paquete",
    titulo: "Tienes un paquete en portería",
    detalle: "Recibido hoy a las 10:30 AM (MercadoLibre).",
  },
  {
    id: 2,
    tipo: "alerta",
    titulo: "Mantenimiento de Ascensores",
    detalle: "Mañana de 8:00 AM a 12:00 PM la Torre 2 no tendrá servicio.",
  },
];

const mockVisitas = [
  {
    id: 1,
    nombre: "Carlos Ramírez",
    tipo: "Familiar",
    hora: "10:30 AM",
    estado: "En conjunto",
  },
  {
    id: 2,
    nombre: "Domicilios Rápidos",
    tipo: "Servicio",
    hora: "Ayer",
    estado: "Salió",
  },
];

export default function DashboardResidente() {
  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
        <div>
          <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 font-bold text-xs rounded-full mb-2">
            Apto {mockUsuario.apartamento} - Torre {mockUsuario.torre}
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-800">
            ¡Hola, {mockUsuario.nombre}!
          </h2>
          <p className="text-slate-500 mt-1">
            Este es el resumen de tu actividad en el conjunto.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <StatCard
          titulo="Visitas este mes"
          valor={mockUsuario.estadisticas.visitasMes.toString()}
          icono={<Users size={28} />}
          bgColor="bg-blue-100"
          textColor="text-blue-600"
        />
        <StatCard
          titulo="Próximas Reservas"
          valor={mockUsuario.estadisticas.proximasReservas.toString()}
          icono={<Calendar size={28} />}
          bgColor="bg-amber-100"
          textColor="text-amber-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <NotificacionesResidente notificaciones={mockNotificaciones} />
        <MisVisitasList visitas={mockVisitas} />
      </div>
    </div>
  );
}
