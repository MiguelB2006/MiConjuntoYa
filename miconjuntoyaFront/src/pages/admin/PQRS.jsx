import { useState } from "react";
import TablaPQRS from "../../components/admin/pqrs/TablaPQRS.jsx";
import ModalAtenderPQRS from "../../components/admin/pqrs/ModalAtenderPQRS.jsx";

export default function PQRS() {
  const [pqrsList, setPqrsList] = useState([
    {
      id: "PQRS-1023",
      residente: "Familia Gómez",
      apto: "304",
      torre: "2",
      tipo: "Queja",
      asunto: "Ruido excesivo en apto 305",
      descripcion:
        "Llevan tres noches con música a todo volumen hasta las 3 AM. Ya se llamó a portería pero no hacen caso.",
      fecha: "Hoy, 08:30 AM",
      estado: "En revisión",
    },
    {
      id: "PQRS-1022",
      residente: "Ana Martínez",
      apto: "102",
      torre: "1",
      tipo: "Petición",
      asunto: "Copia de recibo de administración",
      descripcion:
        "Necesito el paz y salvo del mes pasado para un trámite bancario, por favor enviarlo a mi correo.",
      fecha: "15 Oct, 2026",
      estado: "Resuelto",
    },
    {
      id: "PQRS-1021",
      residente: "Carlos Ruiz",
      apto: "501",
      torre: "3",
      tipo: "Sugerencia",
      asunto: "Instalar basureros en parque",
      descripcion:
        "Sería ideal poner basureros para las heces de las mascotas cerca a la zona de niños.",
      fecha: "10 Oct, 2026",
      estado: "Pendiente",
    },
    {
      id: "PQRS-1020",
      residente: "Luis Torres",
      apto: "201",
      torre: "1",
      tipo: "Reclamo",
      asunto: "Cobro doble en administración",
      descripcion:
        "Este mes me llegó la factura con un cobro de parqueadero de visitantes que no utilicé.",
      fecha: "05 Oct, 2026",
      estado: "Pendiente",
    },
  ]);

  const [busqueda, setBusqueda] = useState("");
  const [filtroEstado, setFiltroEstado] = useState("");
  const [pqrsSeleccionada, setPqrsSeleccionada] = useState(null);

  const pqrsFiltradas = pqrsList.filter((pqrs) => {
    const coincideBusqueda =
      pqrs.id.toLowerCase().includes(busqueda.toLowerCase()) ||
      pqrs.residente.toLowerCase().includes(busqueda.toLowerCase()) ||
      pqrs.asunto.toLowerCase().includes(busqueda.toLowerCase());
    const coincideEstado = filtroEstado === "" || pqrs.estado === filtroEstado;
    return coincideBusqueda && coincideEstado;
  });

  const actualizarEstadoPQRS = (id, nuevoEstado) => {
    setPqrsList(
      pqrsList.map((p) => (p.id === id ? { ...p, estado: nuevoEstado } : p)),
    );
    setPqrsSeleccionada(null);
  };

  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-10 bg-slate-50 h-full relative">
      <div className="mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-800">
          Gestión de PQRS
        </h2>
        <p className="text-slate-500 mt-1">
          Revisa, atiende y actualiza el estado de las solicitudes radicadas por
          los residentes.
        </p>
      </div>

      <TablaPQRS
        pqrsList={pqrsFiltradas}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        filtroEstado={filtroEstado}
        setFiltroEstado={setFiltroEstado}
        onAtender={(pqrs) => setPqrsSeleccionada(pqrs)}
      />

      <ModalAtenderPQRS
        pqrs={pqrsSeleccionada}
        onClose={() => setPqrsSeleccionada(null)}
        onActualizarEstado={actualizarEstadoPQRS}
      />
    </div>
  );
}
